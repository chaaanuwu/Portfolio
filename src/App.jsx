import { useEffect, useState, useRef } from "react";
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import NavSide from "./components/NavSide.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";


function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");

        console.log("Fetching data from:", response.url);
        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(`${err.message} - Check if data.json exists in the correct location`);

        // Retry with absolute URL if the first fetch fails
        try {
          console.log("Retrying with absolute URL...");
          const fallbackResponse = await fetch("https://chaaanuwu.github.io/Portfolio/data.json");

          if (!fallbackResponse.ok) {
            throw new Error(`HTTP error! Status: ${fallbackResponse.status}`);
          }

          const fallbackData = await fallbackResponse.json();
          setData(fallbackData);
          setLoading(false);
        } catch (fallbackErr) {
          console.error("Fallback fetch also failed:", fallbackErr);
          setError(`${fallbackErr.message} - Ensure data.json is accessible`);
          setLoading(false);
        }
      }
    };

    const timer = setTimeout(fetchData, 2000); // Simulated delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!data) return;

    const handleLinkClick = (e) => {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const navLinks = document.querySelectorAll(".nav-list a");
    navLinks.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
      navLinksRef.current.push({ link, handler: handleLinkClick });
    });

    return () => {
      navLinksRef.current.forEach(({ link, handler }) => {
        link.removeEventListener("click", handler);
      });
      navLinksRef.current = [];
    };
  }, [data]);

  if (loading) {
    return (
      <div className="lottie-container">
        <DotLottieReact
          src="https://lottie.host/811ef397-41fd-468a-9411-b35014b809e4/dZOHLYffBs.lottie"
          loop
          autoplay
        />
      </div>
    );
  }

  if (error) {
    return <div className="error">Error loading data: {error}</div>;
  }

  return (
    <>
      <NavBar />
      <NavSide />
      <Home
        name={data?.name}
        title={data?.title}
        description={data?.description}
        socials={data?.socials}
      />
      <Skills />
      <Contact contact={data?.contact} />
      <Footer name={data?.name} socials={data?.socials} />
    </>
  );
}

export default App;
