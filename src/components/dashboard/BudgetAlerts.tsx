import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, Info, X } from "lucide-react";

const alerts = [
  {
    type: "warning",
    title: "Dining Budget Alert",
    message: "You've spent 85% of your dining budget this month",
    action: "Review Expenses",
    icon: AlertTriangle
  },
  {
    type: "success",
    title: "Savings Milestone",
    message: "Congratulations! You've reached your monthly savings goal",
    action: "Set New Goal",
    icon: CheckCircle
  },
  {
    type: "info",
    title: "Bill Reminder",
    message: "Your credit card payment is due in 3 days",
    action: "Pay Now",
    icon: Info
  }
];

export const BudgetAlerts = () => {
  const getAlertColor = (type: string) => {
    switch (type) {
      case "warning": return "text-warning";
      case "success": return "text-success";
      case "info": return "text-info";
      default: return "text-muted-foreground";
    }
  };

  const getAlertBg = (type: string) => {
    switch (type) {
      case "warning": return "bg-warning/10 border-warning/20";
      case "success": return "bg-success/10 border-success/20";
      case "info": return "bg-info/10 border-info/20";
      default: return "bg-muted/10 border-muted/20";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Smart Budget Alerts</CardTitle>
        <CardDescription className="text-muted-foreground">
          AI-powered financial notifications
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {alerts.map((alert, index) => {
          const Icon = alert.icon;
          
          return (
            <Alert key={index} className={`${getAlertBg(alert.type)} border`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <Icon className={`h-4 w-4 mt-0.5 ${getAlertColor(alert.type)}`} />
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-foreground">
                      {alert.title}
                    </div>
                    <AlertDescription className="text-xs text-muted-foreground">
                      {alert.message}
                    </AlertDescription>
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="h-6 px-2 text-xs font-medium text-primary hover:text-primary-foreground hover:bg-primary"
                    >
                      {alert.action}
                    </Button>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </Alert>
          );
        })}
      </CardContent>
    </Card>
  );
};