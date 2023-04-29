import Link from "next/link"; // link
import Layout from "./layout"; // layout applied everywhere

function HomePage() {
  return (
    <Layout>
      <h1>  Welcome to Statistics Julia website!</h1>
      <ol>
        <li> - Approximate number of unique Julia users: over 1.25 million</li>
        <li>- Package Server request success rate:92% and cache miss rate:0.6%</li>
      </ol>
    </Layout>
  );
}

export default HomePage;