{job.status === "EMPLOYEE-PAID" && (
<S.FooterContainer>
<Button variant="secondary">Ver mais</Button>
<Button onClick={toggle} variant="primary">
Iniciar Trabalho
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Negócio Fechado!"
modalContent={<ModalDealDone />}
/>
</S.FooterContainer>
)}
{job.status === "EMPLOYEE-START" && (
<S.FooterContainer>
<Button onClick={toggle} variant="primary">
Entregar
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Deseja enviar o trabalho?"
modalContent={<ModalInsertWork />}
/>
<a href={`/jobs/${job.jobId}`}>
<Button variant="secondary">Ver Mais</Button>
</a>
<a target="_blank" href="https://wa.me/5541999959588">
<Button variant="tertiary">Problema</Button>
</a>
</S.FooterContainer>
)}
{job.status === "EMPLOYEE-BILL" && (
<S.FooterContainer>
<Button onClick={toggle} variant="primary">
Entregar
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Deseja enviar o trabalho?"
modalContent={<ModalInsertWork />}
/>{" "}
<a href={`/jobs/${job.jobId}`}>
<Button variant="secondary">Ver Mais</Button>
</a>
<Button onClick={toggle} variant="tertiary">
Cobrança
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Olá!"
modalContent={<ModalDone />}
/>
</S.FooterContainer>
)}
{job.status === "EMPLOYEE-CHANGE" && (
<S.FooterContainer>
<Button onClick={toggle2} variant="primary">
Entregar
</Button>
<Modal
isShown={isShown2}
hide={toggle2}
headerText="Deseja enviar o trabalho?"
modalContent={<ModalInsertWork />}
/>
<a href={`/jobs/${job.jobId}`}>
<Button variant="secondary">Ver Mais</Button>
</a>
<Button onClick={toggle} variant="quinternary">
Alterações
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Olá. Essas são as alterações solicitadas"
modalContent={<ModalChanges />}
/>
</S.FooterContainer>
)}
{job.status === "EMPLOYEE-DONE" && (
<S.FooterContainer>
<Button onClick={toggle} variant="primary">
Ver FeedBack
</Button>
<Button onClick={toggle} variant="secondary">
Ver mais
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Feedback do Estudante"
modalContent={<ModalFeedback />}
/>
</S.FooterContainer>
)}
{job.status === "EMPLOYEE-SEE" && (
<S.FooterContainer>
<a href={`/jobs/${job.jobId}`}>
<Button variant="secondary">Ver Mais</Button>
</a>
</S.FooterContainer>
)}
{job.status === "EMPLOYEE-WANT" && (
<S.FooterContainer>
<Button onClick={toggle} variant="primary">
Aceitar Proposta
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Informações da Entrega"
modalContent={<ModalRules />}
/>
<Button onClick={toggle2} variant="secondary">
Contraproposta
</Button>
<Modal
isShown={isShown2}
hide={toggle2}
headerText="Alterar Valor"
modalContent={<ModalCounterProposal />}
/>
</S.FooterContainer>
)}
{/_ Student _/}
{job.status === "STUDENT-CREATE" && (
<S.FooterContainer>
<a href="/studentviewproposals">
<Button variant="primary">Ver Propostas</Button>
</a>
<a href="/studentviewproposals">
<Button variant="secondary">Ver Mais</Button>
</a>
</S.FooterContainer>
)}
{job.status === "STUDENT-GET" && (
<S.FooterContainer>
<Button onClick={toggle} variant="primary">
Entrega
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Olá, Enrico."
modalContent={<ModalOpenWorkStep2 />}
/>
<a href={`/jobs/${job.jobId}`}>
<Button variant="secondary">Ver Mais</Button>
</a>
<Button onClick={toggle2} variant="tertiary">
Alterações
</Button>
<Modal
isShown={isShown2}
hide={toggle2}
headerText="Solicitar Alteração"
modalContent={<ModalRequestChanges />}
/>
</S.FooterContainer>
)}
{job.status === "STUDENT-DONE" && (
<S.FooterContainer>
<Button onClick={toggle} variant="primary">
Entrega
</Button>
<Modal
isShown={isShown}
hide={toggle}
headerText="Olá, Enrico."
modalContent={<ModalOpenWork />}
/>
<a href={`/jobs/${job.jobId}`}>
<Button variant="secondary">Ver Mais</Button>
</a>
<Button onClick={toggle2} variant="quaternary">
Avaliar
</Button>
<Modal
isShown={isShown2}
hide={toggle2}
headerText="Olá, Enrico"
modalContent={<ModalRating />}
/>
</S.FooterContainer>
)}
{job.status === "STUDENT" && ""}
{job.status === "STUDENT-EDIT" && (
<S.FooterContainer>
<a href={`/jobs/${job.jobId}/update`}>
<Button variant="primary">Editar Trabalho</Button>
</a>
</S.FooterContainer>
)}
