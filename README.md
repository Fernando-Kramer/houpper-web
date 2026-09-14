# houpper-web
Plataforma SaaS multi-tenant para gestão de clínicas e negócios de serviços, com foco em agendamentos, organização operacional e futuras integrações de comunicação automatizada. 


docker build -t houpper-web .


docker run -d --name houpper-web -p 80:80 houpper-web