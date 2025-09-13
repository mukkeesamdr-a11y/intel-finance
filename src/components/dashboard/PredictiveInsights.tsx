import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, AlertCircle, Lightbulb, ArrowRight } from "lucide-react";

const insights = [
  {
    type: "prediction",
    title: "Monthly Spending Forecast",
    content: "Based on your current spending patterns, you're likely to spend $3,420 this month, which is $80 over your budget.",
    confidence: 92,
    action: "Adjust Budget",
    icon: TrendingUp,
    priority: "high"
  },
  {
    type: "opportunity",
    title: "Savings Opportunity Detected",
    content: "You could save $180/month by switching to a different phone plan and reducing subscription services.",
    confidence: 87,
    action: "View Options",
    icon: Lightbulb,
    priority: "medium"
  },
  {
    type: "risk",
    title: "Unusual Spending Pattern",
    content: "Your entertainment spending has increased by 45% compared to last month. This trend might impact your savings goals.",
    confidence: 95,
    action: "Review Transactions",
    icon: AlertCircle,
    priority: "high"
  },
  {
    type: "goal",
    title: "Emergency Fund Progress",
    content: "At your current savings rate, you'll reach your emergency fund goal 2 months ahead of schedule.",
    confidence: 89,
    action: "Set New Goal",
    icon: TrendingUp,
    priority: "low"
  }
];

export const PredictiveInsights = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive/20 text-destructive border-destructive/30";
      case "medium": return "bg-warning/20 text-warning border-warning/30";
      case "low": return "bg-success/20 text-success border-success/30";
      default: return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          AI Predictive Insights
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Machine learning powered financial analysis and recommendations
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          
          return (
            <div 
              key={index} 
              className="p-4 rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{insight.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant="outline" 
                        className={`text-xs ${getPriorityColor(insight.priority)}`}
                      >
                        {insight.priority.toUpperCase()}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {insight.confidence}% confidence
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {insight.content}
              </p>
              
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:bg-primary/10 transition-colors"
              >
                {insight.action}
                <ArrowRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};