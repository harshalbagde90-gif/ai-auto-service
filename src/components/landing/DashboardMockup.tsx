import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cpu, GitBranch, CheckCircle, Play, Pause, Zap } from "lucide-react";
import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const CounterItem = ({ value, className }: { value: string; className?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const numericValue = parseFloat(value.replace(/,/g, "").replace("%", ""));
  const isPercentage = value.includes("%");

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(0, numericValue, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (isPercentage) {
          node.textContent = latest.toFixed(1) + "%";
        } else {
          node.textContent = Math.floor(latest).toLocaleString();
        }
      },
    });

    return () => controls.stop();
  }, [numericValue, isPercentage]);

  return <span ref={nodeRef} className={className} />;
};

const WorkflowItem = ({ name, value }: { name: string; value: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const width = useTransform(count, (latest) => `${latest}%`);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
    return () => controls.stop();
  }, [value]);

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-300 mb-1">
        <span>{name}</span>
        <span>
          <motion.span>{rounded}</motion.span>%
        </span>
      </div>
      <div className="w-full bg-gray-800/60 rounded-full h-2 overflow-hidden">
        <motion.div
          style={{ width }}
          className="bg-gradient-to-r from-purple-500 to-fuchsia-500 h-2 rounded-full"
        />
      </div>
    </div>
  );
};

const DashboardMockup = () => {
  const [running, setRunning] = useState(true);

  const stats = [
    { title: "Active AI Workflows", value: "87", icon: Cpu, color: "text-purple-400" },
    { title: "Tasks Automated", value: "1,248", icon: GitBranch, color: "text-purple-400" },
    { title: "Success Rate", value: "98.4%", icon: CheckCircle, color: "text-green-400" },
  ];

  const workflows = [
    { name: "Lead Capture Automation", value: 82 },
    { name: "CRM Sync", value: 91 },
    { name: "Email Follow‑up AI", value: 76 },
    { name: "Invoice Generation", value: 88 },
  ];

  return (
    <div className="relative">
      {/* Glowing Effect Behind Dashboard */}
      <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 rounded-3xl blur-3xl -z-10" />
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-fuchsia-500/30 rounded-2xl blur-lg -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="grid grid-cols-3 gap-3 bg-gradient-to-br from-[#0a0614] via-[#12091f] to-[#0a0614] p-5 rounded-2xl shadow-[0_0_80px_rgba(139,92,246,0.15)] border border-purple-500/10 relative z-10"
      >
        {/* Top Stats */}
        {stats.map((item) => (
          <motion.div whileHover={{ scale: 1.03 }} key={item.title}>
            <Card className="bg-[#140b2a]/80 backdrop-blur border border-purple-500/10">
              <CardContent className="p-3">
                <item.icon className={`${item.color} mb-2 h-5 w-5`} />
                <h4 className="text-gray-300 text-xs">{item.title}</h4>
                <div className={`text-xl font-bold ${item.color}`}>
                  <CounterItem value={item.value} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Workflow Performance */}
        <Card className="col-span-3 bg-[#12091f]/80 backdrop-blur border border-purple-500/20">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-white text-base">AI Workflow Performance</h3>
              <Badge className="bg-purple-500/10 text-purple-400 text-xs">Last 7 Days</Badge>
            </div>

            <div className="space-y-3">
              {workflows.map((item) => (
                <WorkflowItem key={item.name} name={item.name} value={item.value} />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Control + Activity */}
        <Card className="col-span-3 bg-[#140b2a]/80 backdrop-blur border border-purple-500/10">
          <CardContent className="p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Zap className="text-green-400 h-4 w-4" />
                <h3 className="text-white text-base">Live AI Engine</h3>
                <Badge className="bg-green-500/20 text-green-400 text-xs">● Running</Badge>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setRunning(!running)}
                className="border-purple-500/30 text-purple-300 hover:bg-purple-500/10 h-7 px-2"
              >
                {running ? <Pause size={14} /> : <Play size={14} />}
              </Button>
            </div>

            <ul className="text-xs text-gray-300 space-y-1.5">
              <li>• AI optimized lead scoring model</li>
              <li>• Workflow "Client Onboarding" executed</li>
              <li>• CRM synced with new customer data</li>
              <li>• Invoice auto‑generated & emailed</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
