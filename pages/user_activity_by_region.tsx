import { Card, Title, BarChart, Subtitle } from "@tremor/react";

const chartdata = [
    {
        region: "Australia",
        "Users": 248,
    },
    {
        region: "Asia",
        "Users": 157,
    },
    {
        region: "Europe",
        "Users": 183,
    },
    {
        region: "North America",
        "Users": 237,
    },
    {
        region: "South America",
        "Users": 148,
    },
];

const dataFormatter = (number: number) => {
    return Intl.NumberFormat("us").format(number).toString();
};

export default function UserActivityByRegion() {
    return (
        <Card>
            <Title>User Activity by Region</Title>
            <Subtitle>
                This compares activity of users based on their requests and interactions with Pkg server.
            </Subtitle>
            <BarChart
                className="mt-6"
                data={chartdata}
                index="region"
                categories={["Users"]}
                colors={["blue"]}
                valueFormatter={dataFormatter}
                yAxisWidth={50}
            />
        </Card>
    )
};