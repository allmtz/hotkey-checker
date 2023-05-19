export default function About() {
  return (
    <div className="about-page">
      <div>
        <p className="about-header">What is this?</p>
        <p className="about-text">
          A simple tool that allows developers to quickly find reserved hotkeys
          for various browsers.
        </p>
      </div>

      <div>
        <p className="about-header">Why?</p>
        <p className="about-text">
          Finding non-reserved cross-browser compatible hotkeys can be a tedious
          process, involving a significant amount of searching and comparing for
          each individual browser you&apos;re targeting. This tool aims to make
          that process smoother.
        </p>
      </div>

      <div>
        <p className="about-header">More developer tools</p>
        <ul>
          <li>
            <p className="about-text">
              <a
                href="https://www.toptal.com/developers/keycode/a"
                target="_blank"
              >
                Toptal
              </a>{" "}
              : JavaScript key code checker
            </p>
          </li>
          <li>
            <p className="about-text">
              <a href="https://mycolor.space/" target="_blank">
                ColorSpace
              </a>{" "}
              : Color palette generator and gradient tool
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
