import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Utensils, Car, Home, ShoppingBag, Gamepad2, MoreHorizontal } from "lucide-react";

const categories = [
  {
    name: "Food & Dining",
    amount: 1240,
    budget: 1500,
    icon: Utensils,
    color: "hsl(var(--primary))",
    aiTag: "On Track"
  },
  {
    name: "Transportation",
    amount: 680,
    budget: 800,
    icon: Car,
    color: "hsl(var(--info))",
    aiTag: "Optimized"
  },
  {
    name: "Housing",
    amount: 2200,
    budget: 2200,
    icon: Home,
    color: "hsl(var(--warning))",
    aiTag: "At Limit"
  },
  {
    name: "Shopping",
    amount: 420,
    budget: 600,
    icon: ShoppingBag,
    color: "hsl(var(--success))",
    aiTag: "Under Budget"
  },
  {
    name: "Entertainment",
    amount: 180,
    budget: 300,
    icon: Gamepad2,
    color: "hsl(var(--accent))",
    aiTag: "Good Control"
  },
  {
    name: "Other",
    amount: 320,
    budget: 400,
    icon: MoreHorizontal,
    color: "hsl(var(--muted))",
    aiTag: "Miscellaneous"
  }
];

export const ExpenseCategories = () => {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">AI Expense Categorization</CardTitle>
        <CardDescription className="text-muted-foreground">
          Smart categorization with budget tracking
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const percentage = (category.amount / category.budget) * 100;
          const isOverBudget = percentage > 100;
          
          return (
            <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border border-border/30 hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-full" style={{ backgroundColor: `${category.color}15` }}>
                <Icon className="h-4 w-4" style={{ color: category.color }} />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-foreground">{category.name}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${isOverBudget ? 'bg-destructive/20 text-destructive' : 'bg-success/20 text-success'}`}
                    >
                      {category.aiTag}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-foreground">
                      ${category.amount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      of ${category.budget}
                    </div>
                  </div>
                </div>
                
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className="h-2"
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};