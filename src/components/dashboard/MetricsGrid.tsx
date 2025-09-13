import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, Target, PiggyBank, CreditCard } from "lucide-react";

const metrics = [
  {
    title: "Total Balance",
    value: "$24,850.00",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    description: "vs last month"
  },
  {
    title: "Monthly Spending",
    value: "$3,420.00",
    change: "-8.2%",
    trend: "down",
    icon: CreditCard,
    description: "vs last month"
  },
  {
    title: "Savings Goal",
    value: "68%",
    change: "+5.1%",
    trend: "up",
    icon: Target,
    description: "of $50,000 goal"
  },
  {
    title: "Emergency Fund",
    value: "$12,500.00",
    change: "+2.8%",
    trend: "up",
    icon: PiggyBank,
    description: "6 months expenses"
  }
];

export const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        const TrendIcon = metric.trend === "up" ? TrendingUp : TrendingDown;
        const trendColor = metric.trend === "up" ? "text-success" : "text-warning";
        
        return (
          <Card key={index} className="relative overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground mb-1">
                {metric.value}
              </div>
              <div className="flex items-center space-x-1 text-xs">
                <TrendIcon className={`h-3 w-3 ${trendColor}`} />
                <span className={trendColor}>{metric.change}</span>
                <span className="text-muted-foreground">{metric.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};