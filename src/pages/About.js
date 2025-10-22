function About() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-3xl font-bold">À propos de moi</h2>
      <p className="text-lg leading-relaxed">
        Je suis <strong>Marwan</strong>, développeur <strong>Full-Stack MERN</strong> passionné par le <strong>DevOps</strong>,
        les technologies modernes, les pipelines CI/CD, le cloud et les architectures microservices.
        J’ai participé à la création de solutions e-commerce scalables, intégrant l’automatisation
        des déploiements avec Jenkins et Kubernetes.
      </p>

      <h4 className="mt-5 mb-3 text-2xl font-semibold">Compétences</h4>
      <div className="d-flex flex-wrap gap-2">
        <span className="badge bg-primary">React</span>
        <span className="badge bg-secondary">Node.js</span>
        <span className="badge bg-success">MongoDB</span>
        <span className="badge bg-warning text-dark">Docker</span>
        <span className="badge bg-info text-dark">Jenkins</span>
        <span className="badge bg-dark">Git / GitHub</span>
        <span className="badge bg-primary-subtle text-dark">Kubernetes</span>
        <span className="badge bg-light text-dark border">CI/CD</span>
        <span className="badge bg-secondary-subtle text-dark">Cloud</span>
      </div>
    </div>
  );
}

export default About;
