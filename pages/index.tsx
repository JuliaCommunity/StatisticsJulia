import Link from "next/link"; // link
import Layout from "./layout"; // layout applied everywhere

function HomePage() {
  return (
    <Layout>
      <h1>Welcome to Stats Julia webiste!</h1>
      <p>You might be interested in looking at the map atm because thats where a lot of information can be plotted eventually.</p>
      <p> Give me ideas on how to best do this!</p>
    </Layout>
  );
}

export default HomePage;