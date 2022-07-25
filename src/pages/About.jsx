function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        The application allows you to search and see Github profile details by
        retrieving data from the Github REST API. Project was created using
        <a
          className="font-medium"
          href="https://reactjs.org/docs/getting-started.html"
        >
          {" "}
          React,
        </a>
        <a
          className="font-medium"
          href="https://tailwindcss.com/docs/installation"
        >
          {" "}
          tailwindcss
        </a>{" "}
        and
        <a className="font-medium" href="https://daisyui.com/">
          {" "}
          daisyUI
        </a>{" "}
        components.
      </p>
      <div className="grid place-content-end">
        <p className="text-gray-400">
          Version <span> 1.0.0</span>
        </p>
      </div>
    </div>
  );
}

export default About;
