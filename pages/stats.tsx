import { Card, Title, Grid } from "@tremor/react";
import Layout from "./layout";
import UserCount from "./users_by_region";
import UserActivityByRegion from "./user_activity_by_region";

export default () => (
    <Layout>
        <Grid numColsSm={2} numColsLg={2} className="gap-6">
            <UserCount />
            <UserActivityByRegion />
        </Grid>
    </Layout>
);