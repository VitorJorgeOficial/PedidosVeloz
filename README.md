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
- Pedidos: http://localhost:3001/Pedidos
- Pagamentos: http://localhost:3002
- Estoque: http://localhost:3003/Estoque

## Kubernetes

```bash
kubectl apply -f k8s/
```

## Pipeline

Pipeline GitHub Actions em:
`.github/workflows/ci.yml`


## Vídeo de Apresentação

Link do vídeo demonstrativo do projeto:

https://www.youtube.com/watch?v=OuRwsrP_KIQ
