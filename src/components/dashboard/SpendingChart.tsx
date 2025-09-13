import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const data = [
  { month: "Jan", actual: 2400, predicted: 2200 },
  { month: "Feb", actual: 2800, predicted: 2600 },
  { month: "Mar", actual: 3200, predicted: 3100 },
  { month: "Apr", actual: 2900, predicted: 3000 },
  { month: "May", actual: 3400, predicted: 3200 },
  { month: "Jun", actual: 3100, predicted: 3300 },
  { month: "Jul", actual: 0, predicted: 3400 },
  { month: "Aug", actual: 0, predicted: 3200 },
  { month: "Sep", actual: 0, predicted: 3100 },
];

export const SpendingChart = () => {
  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader>
        <CardTitle className="text-foreground">Spending Trends & Predictions</CardTitle>
        <CardDescription className="text-muted-foreground">
          AI-powered spending analysis with future predictions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="predictedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--info))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--info))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              dataKey="month" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))"
              }}
              formatter={(value: number, name: string) => [
                `$${value}`, 
                name === "actual" ? "Actual Spending" : "Predicted Spending"
              ]}
            />
            <Area
              type="monotone"
              dataKey="actual"
              stroke="hsl(var(--primary))"
              fillOpacity={1}
              fill="url(#actualGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="predicted"
              stroke="hsl(var(--info))"
              fillOpacity={1}
              fill="url(#predictedGradient)"
              strokeWidth={2}
              strokeDasharray="5 5"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};