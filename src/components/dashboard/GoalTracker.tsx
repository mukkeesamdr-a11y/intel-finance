import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Target, Plus, TrendingUp } from "lucide-react";

const goals = [
  {
    name: "Emergency Fund",
    current: 12500,
    target: 20000,
    deadline: "Dec 2024",
    color: "hsl(var(--success))"
  },
  {
    name: "Vacation Fund",
    current: 3200,
    target: 8000,
    deadline: "Jun 2024",
    color: "hsl(var(--info))"
  },
  {
    name: "New Car",
    current: 8500,
    target: 25000,
    deadline: "Mar 2025",
    color: "hsl(var(--warning))"
  }
];

export const GoalTracker = () => {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-foreground flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Financial Goals
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Track your savings progress
            </CardDescription>
          </div>
          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => {
          const percentage = (goal.current / goal.target) * 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">{goal.name}</span>
                <span className="text-muted-foreground">{goal.deadline}</span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>${goal.current.toLocaleString()}</span>
                <span>{percentage.toFixed(0)}%</span>
                <span>${goal.target.toLocaleString()}</span>
              </div>
              
              <Progress value={percentage} className="h-2" />
              
              <div className="flex items-center gap-1 text-xs text-success">
                <TrendingUp className="h-3 w-3" />
                <span>On track to reach goal</span>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};