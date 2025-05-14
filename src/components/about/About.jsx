import { useState, useRef, useEffect } from "react";
import "./About.css";
import BikeIcon from "./BikeIcon";
import TeamMember from "./TeamMember";

const About = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Viktor",
      role: "Rides like it's the last time",
      image: "/team/viktor.png",
      bio: "Mechanical engineer by day, downhill rider by night. I'm the one who rides like it's my last time.",
    },
    {
      id: 2,
      name: "Ivan",
      role: "Guy who jumps road gaps",
      image: "/team/ivan.png",
      bio: "He's the one who jumps road gaps",
    },
    {
      id: 3,
      name: "pero",
      role: "Our mekanik",
      image: "/team/pero.png",
      bio: "He knows how to maintain your bike... Oh and loves kiselo kafe",
    },
    {
      id: 4,
      name: "david",
      role: "Trail builder",
      image: "/team/david.png",
      bio: "Usually knows more about components than the bike shop.",
    },
  ];

  // Calculate the width of a single item (including gap)
  const calculateItemWidth = () => {
    if (!sliderRef.current) return 0;

    const containerWidth = sliderRef.current.offsetWidth;
    const itemsPerView = 3;
    const gapSize = 24; // 1.5rem gap in pixels

    // Calculate exact width including the gap
    const totalGapWidth = gapSize * (itemsPerView - 1);
    const itemWidth = (containerWidth - totalGapWidth) / itemsPerView;

    return itemWidth + gapSize; // Include gap in the slide amount
  };

  // Snap to the nearest item
  const snapToItem = () => {
    if (!sliderRef.current || !itemWidth) return;

    const currentScroll = sliderRef.current.scrollLeft;
    const nearestItem = Math.round(currentScroll / itemWidth);
    const targetScroll = nearestItem * itemWidth;

    sliderRef.current.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    setScrollPosition(targetScroll);
  };

  const slideLeft = () => {
    if (sliderRef.current && !isTransitioning && itemWidth) {
      let newPosition = scrollPosition - itemWidth;

      setIsTransitioning(true);

      // If at the beginning, jump to end
      if (scrollPosition <= itemWidth / 2) {
        // Calculate the position to jump to (total width - one screen width)
        const totalItems = teamMembers.length;
        const totalWidth = itemWidth * totalItems;

        // First scroll without animation to the clone section
        sliderRef.current.style.scrollBehavior = "auto";
        sliderRef.current.scrollLeft = totalWidth;

        // Then after a small delay, restore smooth scrolling and move one item
        setTimeout(() => {
          sliderRef.current.style.scrollBehavior = "smooth";
          newPosition = totalWidth - itemWidth;
          sliderRef.current.scrollLeft = newPosition;
          setScrollPosition(newPosition);

          setTimeout(() => {
            setIsTransitioning(false);
          }, 400);
        }, 50);
      } else {
        // Normal scroll
        sliderRef.current.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
        setScrollPosition(newPosition);

        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }
    }
  };

  const slideRight = () => {
    if (sliderRef.current && !isTransitioning && itemWidth) {
      const maxScroll =
        sliderRef.current.scrollWidth - sliderRef.current.offsetWidth;
      let newPosition = scrollPosition + itemWidth;

      setIsTransitioning(true);

      // If at the end, jump to beginning
      if (scrollPosition >= maxScroll - itemWidth / 2) {
        // First scroll without animation to the beginning
        sliderRef.current.style.scrollBehavior = "auto";
        sliderRef.current.scrollLeft = 0;

        // Then after a small delay, restore smooth scrolling and move one item
        setTimeout(() => {
          sliderRef.current.style.scrollBehavior = "smooth";
          newPosition = itemWidth;
          sliderRef.current.scrollLeft = newPosition;
          setScrollPosition(newPosition);

          setTimeout(() => {
            setIsTransitioning(false);
          }, 400);
        }, 50);
      } else {
        // Normal scroll
        sliderRef.current.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
        setScrollPosition(newPosition);

        setTimeout(() => {
          setIsTransitioning(false);
        }, 400);
      }
    }
  };

  // Initialize scroll position and calculate item width
  useEffect(() => {
    if (sliderRef.current) {
      const width = calculateItemWidth();
      setItemWidth(width);

      // Start in the middle to allow scrolling both ways
      const initialPosition = width * teamMembers.length;
      sliderRef.current.scrollLeft = initialPosition;
      setScrollPosition(initialPosition);
    }

    // Recalculate on window resize
    const handleResize = () => {
      if (sliderRef.current) {
        const width = calculateItemWidth();
        setItemWidth(width);

        // Snap to nearest item after resize
        setTimeout(snapToItem, 100);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create a tripled array for the infinite effect
  const displayMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header fade-in">
          <h2>
            about <span>bdbc</span>
          </h2>
          <div className="accent-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text fade-in">
            <p>
              <span>Bad Decisions Bike Club</span> - We're the folks your mother
              warned you about if she was worried about your bike budget. A
              small, ridiculously enthusiastic crew, we live for the dirt – from
              sending it downhill to enduring cross-country, though enduro is
              where our collective soul (and occasionally, some sanity) gets
              happily lost. Our primary performance enhancer? Generous
              applications of beer. You'll frequently find us holding court at
              <span>Tetka Bile</span>, beer in hand, passionately dissecting
              component choices and the eternal enigma that is SRAM's
              interpretation of 'braking'.
            </p>
          </div>

          <div className="about-stats fade-in">
            <div className="stat">
              <h3>16+</h3>
              <p>active members</p>
              <BikeIcon />
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>custom trails</p>
              <BikeIcon />
            </div>
            <div className="stat">
              <h3>0</h3>
              <p>events per year</p>
              <BikeIcon />
            </div>
          </div>
        </div>

        <div className="team-section fade-in">
          <h3>our crew</h3>
          <div className="team-slider-container">
            <button
              className="slider-btn slider-btn-left"
              onClick={slideLeft}
              disabled={isTransitioning}
            >
              &lt;
            </button>
            <div className="team-members-slider" ref={sliderRef}>
              {displayMembers.map((member, index) => (
                <TeamMember key={`${member.id}-${index}`} member={member} />
              ))}
            </div>
            <button
              className="slider-btn slider-btn-right"
              onClick={slideRight}
              disabled={isTransitioning}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
