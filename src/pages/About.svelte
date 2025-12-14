<script lang="ts">
  import "../styles/Home.css";
  import "../styles/About.css"
  import { FaSyncAlt, FaCheckCircle, FaChartLine, FaCompass } from "svelte-icons/fa";

  const BASE_URL = import.meta.env.BASE_URL;

  const intro = "Outside of software and research, I stay active and try to spend time doing things that keep me grounded and energized.";

  const hobbies: string[] = [
    "Weight lifting", 
    "Running", 
    "Hiking", 
    "Traveling", 
    "Reading", 
    "Listening to music", 
    "Making and eating great food", 
    "Spending time with my girlfriend, family, and friends"
  ];

  type PhotoCard = {
    url: string;
    alt?: string;
    caption?: string;
  };

  const photos: PhotoCard[] = [
    {
      url: BASE_URL + "public/about/IMG_1220.jpg", 
      alt: "Me and my girlfriend taking a selfie", 
      caption: "Me and my girlfriend visiting her family in LA, CA"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3192.jpg", 
      alt: "A view of the ocean in Portofino, Italy", 
      caption: "A scenic ocean picture I took in Portofino, Italy"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3743.jpg", 
      alt: "Aspen's Corner in Flagstaff, AZ", 
      caption: "Part of Aspen's Corner during the Fall in Flagstaff, AZ"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3724.jpg", 
      alt: "Hamachi Crudo", 
      caption: "One of my favorite dishes, a take on Hamachi Crudo"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3339.jpg", 
      alt: "An area in the ruins of Pompeii", 
      caption: "One of the many pictures I took of the ruins of Pompeii near modern day Naples, Italy"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3831.jpg", 
      alt: "Me and my girlfriend after a hike", 
      caption: "Me and my girlfriend after hiking Lockett Meadow in Flagstaff, AZ"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3286.jpg", 
      alt: "The Colosseum from the outside", 
      caption: "I picture I took of the Colosseum while visting Rome, Italy"
    }, 
    {
      url: BASE_URL + "public/about/IMG_0046.jpg", 
      alt: "Steak Tartare", 
      caption: "Another one of my favorite dishes, Steak Tartare"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3872.jpg", 
      alt: "My girlfriend excited about eating a sushi boat", 
      caption: "My girlfriend excited about finally getting a sushi boat (we love to eat)"
    }, 
    {
      url: BASE_URL + "public/about/IMG_3310.jpg", 
      alt: "Duomo di Sant'Andrea (Amalfi Cathedral)", 
      caption: "The Duomo di Sant'Andrea (Amalfi Cathedral) in Amalfi, Italy"
    }
  ];

  const now: string[] = [
    "Staying consistent with lifting while improving my cardio through running.", 
    "Planning my next trip and looking out for cool trails to hike.", 
    "Getting back into my daily reading routine.", 
    "Making time for the people who matter the most."
  ];
</script>

<main>
  <section class="sectionPad">
    <div class="wrap aboutHeroGrid">
      <div class="aboutHeroLeft">
        <p class="kicker">More about me</p>
        <h1 class="title">Life beyond software</h1>
        <p class="subtitle">{intro}</p>
      </div>

      <aside class="aboutHobbiesCard" aria-label="Hobbies">
        <h2 class="aboutHobbiesTitle">I always make time for</h2>
          <div class="chips" aria-label="Hobbies">
            {#each hobbies as hobby}
              <span class="chip">{hobby}</span>
            {/each}
          </div>
      </aside>
    </div>
  </section>

  <section class="sectionPad" aria-label="Photo Highlights">
    <div class="wrap">
      <div class="aboutPhotosHeader">
        <h2 class="aboutPhotosTitle">Recent highlights</h2>
        <p class="aboutPhotosSubtitle">A few moments outside the terminal</p>
      </div>

      <div class="photoRail" role="list">
        {#each photos as photo}
          <figure class="photoRailCard" role="listitem">
            <img class="photoImg" src={photo.url} alt={photo.alt} loading="lazy" />
            <figcaption class="caption">{photo.caption}</figcaption>
          </figure>
        {/each}
      </div>
    </div>
  </section>

<section class="about sectionPad" aria-label="More about me">
  <div class="wrap aboutGrid">
    <div class="expectLeft">
      <h2 class="aboutTitle">What you can expect from me</h2>

      <div class="expectStack" aria-label="Expectations">
        <div class="expectItem">
          <span class="expectIcon" aria-hidden="true">
            <FaSyncAlt />
          </span>
          <div class="expectText">
            <div class="expectLabel">Consistency</div>
            <div class="expectSub">I value repeatable habits and steady progress.</div>
          </div>
        </div>

        <div class="expectItem">
          <span class="expectIcon" aria-hidden="true">
            <FaCheckCircle />
          </span>
          <div class="expectText">
            <div class="expectLabel">Ownership</div>
            <div class="expectSub">I follow through and communicate clearly.</div>
          </div>
        </div>

        <div class="expectItem">
          <span class="expectIcon" aria-hidden="true">
            <FaChartLine />
          </span>
          <div class="expectText">
            <div class="expectLabel">Long-term thinking</div>
            <div class="expectSub">I optimize for compounding results over time.</div>
          </div>
        </div>

        <div class="expectItem">
          <span class="expectIcon" aria-hidden="true">
            <FaCompass />
          </span>
          <div class="expectText">
            <div class="expectLabel">Balance</div>
            <div class="expectSub">I protect time outside of work to remain humble and well-rounded.</div>
          </div>
        </div>
      </div>
    </div>

    <div class="stack">
      <p class="prose">
        I like routines that compound over time. Training, food, reading, travel planning, and relationships all work better
        when you show up consistently.
      </p>

      <div class="nowCard" aria-label="Currently">
        <h3 class="nowTitle">Right now</h3>
        <ul class="nowList">
          {#each now as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</section>
</main>
