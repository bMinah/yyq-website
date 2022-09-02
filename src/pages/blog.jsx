import Header from "../components/header";

const Blog = () => {
  return (
    <div className="canvas">
      <Header />
      <div className="pageWrapper">
        <div className="blogContent">
          <article className="blogArticle">
            <h1 data-content-field="title" className="entry-title">
              <div>A Man Escaped: The Wind Bloweth Where it Listeth</div>
              <span className="date">
                /&nbsp;
                <time className="published" dateTime="2019-02-14">
                  February 14, 2019
                </time>
              </span>
              {/* <span class="author">by <a href="">Yiqing Yu</a></span> */}
            </h1>
            <div className="entry-content">
              <div className="blockContentWrapper">
                <div className="block-content">
                  <blockquote>
                    <p style={{ whiteSpace: "pre-wrap" }}>
                      Director: Robert Bresson
                      <br />
                      Running time: 99 minutes
                      <br />
                      Time: 1956
                    </p>
                  </blockquote>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    I cannot think of another film with such a simple premise
                    and plot line like <em>A Man Escaped</em> - it’s only about
                    a man in prison attempting to escape.&nbsp;The film title
                    spoiled everything, but still, I cannot catch my breath
                    throughout the 99-minute-film. Apart from Bresson’s
                    signature style of economical direction and subjective
                    cinematography, the use of auditory elements in{" "}
                    <em>A Man Escaped</em> effectively led the audience into the
                    repressed world and truly made the film a masterpiece.
                    <br />
                    <br />
                    With the nature of the story mostly happens within a single
                    location, the audience is solely following Fontaine’s point
                    of view, the use of off-screen sound became the essence of
                    story-telling. We hear gunfires of executions, we hear
                    guards' whistles, we hear footsteps reverberate in the
                    hallway, we hear keys tapping on stair railings, we hear
                    trains passing by in distance, but without ever seeing any
                    of them. These sound kept recurring throughout the film,
                    gradually forming a pattern so that audience could be
                    triggered with expectations and mounting tensions,
                    meanwhile, construct the scale of this prison without
                    showing any wide establishing shot at all.
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    The opening sequence in the car reveals the core actions of
                    this film, wait, wait, and wait, take the chance, then
                    escape. By mixing and building a soundscape from an old
                    car’s engine, the roar of a train passing through, and a
                    ringing bell, Bresson creates the tension of Fontaine’s
                    nerves during the wait. Right after Fontaine escaped, while
                    the camera stayed put in the car, the roar of the train was
                    intentionally erased, leaving only the footsteps of chasing
                    and the sound of the guns. The unbalance of the space with
                    an empty seat, along with the off-screen&nbsp;sound
                    elegantly indicates Fontaine’s failure to his first escape.
                    Similarly, on the night of the final escape, Bresson uses
                    the same technique to show how Fontaine kills a guard. This
                    time we stay in a corner without seeing the killing action,
                    while the sound of a passing train covers the scuffling
                    sound until we see Fontaine reappears from the dark. The
                    lack of visual and the smart use of off-screen sound
                    actually made the scene more intense by giving the audience
                    the space to imagine by themselves.
                  </p>
                </div>
                <div className="image-block">
                  <img
                    className="thumb-image"
                    src="/images/blog/AManEscaped.jpg"
                    alt="AManEscaped"
                  />
                  <figcaption className="image-caption-wrapper">
                    <div className="image-caption">
                      <p>
                        Fontaine is loosening the boards of his cell door with a
                        spoon.
                      </p>
                    </div>
                  </figcaption>
                </div>
                <div className="block-content">
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    All the sound of Fontaine’s action in his cell had been
                    exaggerated to emphasize the oppressive feeling of the
                    environment and convey the protagonist’s solitude and
                    isolation. Hearing him grinding the spoon into a chisel,
                    loosening the boards of his cell door, tearing down the
                    blanket to make the rope, cautiously cleaning up debris with
                    a broom, these attentive detailed sounds truly stand out in
                    the contrast to the silent prison ambiance. Interestingly,
                    some sound effects that are usually altered to be dramatic
                    in films are treated naturalistically in&nbsp;
                    <em>A Man Escaped</em>. The blows of the guard sound flat
                    when he hit Fontaine, just like the way they would be in
                    real life. These choices made by the filmmaker reflected in
                    the success of a suspenseful viewing experience.
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    The narration of Fontaine is another element that enables
                    the audience to assemble a narrative. The voice-over is in
                    past tense, with the same function of its title, indicates
                    the success of the escape. Following the minimal aesthetic
                    of the film, the narration only provides crucial information
                    relates to Fontaine’s mental state and the escape, mostly
                    clarifying the action and indications of time, just enough
                    for the audience to pull the threads together
                    themselves.&nbsp;
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    Last but not the least, Mozart’s Great Mass in C minor which
                    played through the opening credits later became the theme of
                    the film. Each time we hear this non-diegetic music, from
                    Fontaine's first thoughts of escape, to another prisoner's
                    failed attempt to escape, to Jost's arrival, and finally
                    their successful escape, marked either a step or a turn of
                    the whole experience. Personally, I would read the music as
                    a symbol of hope and cure for the suffering prisoner during
                    the time. And the religious&nbsp;meaning behind the music
                    may be explained by Fontaine’s line to the Priest in the
                    washroom, “The Wind Bloweth Where it Listeth”.
                  </p>
                  <p style={{ whiteSpace: "pre-wrap" }}>
                    <em>A Man Escaped</em> is a great example of how to use
                    sound to its maximum in filmmaking, and even embrace the
                    chance to let sound dominate the image if needed. As David
                    Bordwell concludes, ‘Bresson is one of a handful of
                    directors who create a complete interplay between sound and
                    image.’
                  </p>
                </div>
                <footer>
                  <div className="meta">
                    <div className="entry-info">
                      <span className="category">
                        <div className="author-link" rel="tag">
                          Ain't a Film Review
                        </div>
                      </span>
                    </div>
                    <div className="info">
                      <span className="updated">
                        <div title="Permalink" className="permalink">
                          <time dateTime="2019-02-14">February 14, 2019</time>
                        </div>
                      </span>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </article>
        </div>
        <div className="sideBarWrapper"></div>
      </div>
    </div>
  );
};
export default Blog;
