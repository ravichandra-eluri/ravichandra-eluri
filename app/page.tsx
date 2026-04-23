export default function Home() {
  return (
    <main className="container">
      <header>
        <h1>
          <img 
            src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" 
            width="30" 
            alt="Wave"
          /> 
          Hello, my name is Ravi.
        </h1>
        <p className="intro">I build distributed systems that still work when networks don't.</p>
      </header>

      <section className="current-work">
        <p>Currently working on:</p>
        <ul>
          <li>Payment systems that handle real-time and offline scenarios</li>
          <li>Kubernetes control planes (CRDs, reconciliation loops)</li>
          <li>Observability pipelines (OpenTelemetry, Prometheus)</li>
        </ul>
        <div className="links">
          <a href="https://ravichandra-eluri.com/">About me</a> · 
          <a href="https://www.linkedin.com/in/ravi-chandra18">LinkedIn</a>
        </div>
      </section>

      <section>
        <h2>🧑🏻‍💻 What I Do</h2>
        <ul>
          <li>Build concurrent, fault-tolerant services in Go (goroutines, gRPC, event-driven patterns)</li>
          <li>Design Kubernetes control planes (CRDs, controllers, reconciliation loops)</li>
          <li>Develop observability pipelines using OpenTelemetry and Prometheus</li>
          <li>Work across cloud infrastructure (GCP, AWS) with Terraform and containerized workloads</li>
        </ul>
      </section>

      <section>
        <h2>🏆 Key Achievement</h2>
        <ul>
          <li>
            <strong>Payment Acceptance Solution:</strong> Real-time transaction orchestration across GCP and on-prem infrastructure. 
            WebSocket-based communication with PIN-pad devices, with offline fallback (SAF). Built with OpenTelemetry + Prometheus 
            for production observability and PCI-compliant flows.
          </li>
          <li>
            <strong>Cloud Telemetry Platform:</strong> Kubernetes-native telemetry control plane using OpenTelemetry on GDC. 
            Designed OTLP pipelines, sampling strategies, and reliable data delivery for edge environments.
          </li>
          <li>
            <strong>Kubernetes CRD Ecosystem:</strong> Built custom CRDs and controllers using client-go and Operator SDK, 
            implementing automated reconciliation loops and secure OIDC-based integrations.
          </li>
        </ul>
      </section>

      <section>
        <h2>📂 Featured Repositories</h2>
        <div className="repos">
          <div className="repo-card">
            <h3><a href="https://github.com/ravichandra-eluri/Otel-k8s-controller">Otel-k8s-controller</a></h3>
            <p>Kubernetes native OTel Collector operator with CRD driven pipeline config</p>
            <p className="stack">Go · Operator SDK · OTLP</p>
          </div>
          <div className="repo-card">
            <h3><a href="https://github.com/ravichandra-eluri/store-forward-otel">store-forward-otel</a></h3>
            <p>Reliable telemetry delivery for edge, buffers OTLP spans and replays on reconnect</p>
            <p className="stack">Go · GDC · OpenTelemetry</p>
          </div>
          <div className="repo-card">
            <h3><a href="https://github.com/ravichandra-eluri/grpc-gateway-patterns">grpc-gateway-patterns</a></h3>
            <p>gRPC and REST gateway patterns with Protocol Buffers and K8s manifests</p>
            <p className="stack">Go · gRPC · Protobuf</p>
          </div>
          <div className="repo-card">
            <h3><a href="https://github.com/ravichandra-eluri/golang-engineering-lab">golang-engineering-lab</a></h3>
            <p>Curated backend patterns explaining concurrency, auth, observability, system design</p>
            <p className="stack">Go · Gin · PostgreSQL</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🧠 Engineering Philosophy</h2>
        <blockquote>
          Simple systems scale.<br />
          Clever systems fail at 2 AM.
        </blockquote>
        <p>I prefer:</p>
        <ul>
          <li>explicit over implicit</li>
          <li>predictable over magical</li>
          <li>observable over "it should work"</li>
        </ul>
      </section>

      <section>
        <h2>🤝 Let's Connect</h2>
        <ul className="contact">
          <li>🌐 <a href="https://ravichandra-eluri.com">https://ravichandra-eluri.com</a></li>
          <li>💼 <a href="https://www.linkedin.com/in/ravi-chandra18">https://www.linkedin.com/in/ravi-chandra18</a></li>
          <li>📧 chandra.sk59@gmail.com</li>
        </ul>
        <p>If you're building something interesting in distributed systems, observability, or payments. I'm always open to good conversations.</p>
      </section>
    </main>
  );
}
