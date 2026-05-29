# Pedidos Veloz

Projeto acadêmico DevOps Cloud-Native com:
- Microsserviços
- Docker Compose
- Kubernetes
- CI/CD
- Observabilidade
- Terraform

## Subir ambiente local

```bash
docker compose up --build
```

## Serviços

- Gateway: http://localhost:8080
- Pedidos: http://localhost:3001
- Pagamentos: http://localhost:3002
- Estoque: http://localhost:3003

## Kubernetes

```bash
kubectl apply -f k8s/
```

## Pipeline

Pipeline GitHub Actions em:
`.github/workflows/ci.yml`