function Home() {
  return (
    <section className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '80vh' }}>
      <h1 className="display-4 fw-bold mb-3">Salut, moi c'est Marwan 👋</h1>
      <p className="lead w-75 mx-auto">
        Développeur <strong>Full-Stack & DevOps</strong> passionné par les technologies modernes, les pipelines CI/CD, le cloud et les architectures microservices.
      </p>
      <a href="/projects" className="btn btn-primary mt-4">Voir mes projets</a>
    </section>
  );
}

export default Home;
