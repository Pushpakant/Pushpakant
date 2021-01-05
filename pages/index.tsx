import Head from 'next/head';

import Navbar from '../components/Navbar';
import Progressbar from '../components/Progressbar';
import AboutSection from '../components/Section/AboutSection';
import IntroductionSection from '../components/Section/IntroductionSection';

export default function App() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pushpakant Behera - Portfolio</title>
      </Head>

      {/* header */}
      <>
        <Navbar />
        <Progressbar />
      </>

      <main>
        <IntroductionSection />
        <AboutSection />
      </main>
    </div>
  );
}
