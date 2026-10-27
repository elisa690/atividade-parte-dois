function processarTransacaoPix(chavePix, valor, callbackAcao) {
    console.log("\n--- Iniciando transação PIX ---");
    if (valor <= 0) {
        console.log("ERRO: O valor da transação deve ser maior que zero.");
        return;
    }
  
    const transacao = {
        id: Math.floor(Math.random() * 100000),
        chavePix,
        valor,
        data: new Date().toLocaleTimeString()
    };
    console.log(Transação PIX aprovada! ID: ${transacao.id});
    console.log(Valor: R$ ${valor.toFixed(2)});
    callbackAcao(transacao);
}
function emitirComprovantePorEmail(transacao) {
    console.log("\n[ E-MAIL ]");
    console.log("Comprovante de pagamento PIX");
    console.log(ID da transação: ${transacao.id});
    console.log(Valor pago: R$ ${transacao.valor.toFixed(2)});
    console.log(Destinatário: ${transacao.chavePix});
    console.log("Comprovante enviado com sucesso!");
}
function creditarCashback(transacao) {
    const cashback = transacao.valor * 0.02;
    console.log("\n[ CASHBACK ]");
    console.log(Valor da transação: R$ ${transacao.valor.toFixed(2)});
    console.log(Cashback concedido: R$ ${cashback.toFixed(2)});
}
function auditarTransacaoSuspeita(transacao) {
    console.log("\n[ AUDITORIA ANTIFRAUDE ]");
    if (transacao.valor > 5000) {
        console.log("🚩 BANDEIRA VERMELHA!");
        console.log(Transação de R$ ${transacao.valor.toFixed(2)} encaminhada para análise antifraude.);
        console.log(ID da transação: ${transacao.id});
    } else {
        console.log("Transação sem alerta pelo critério de valor.");
    }
}
processarTransacaoPix(
    "cliente@email.com",
    150,
    emitirComprovantePorEmail
);
processarTransacaoPix(
    "11987654321",
    200,
    creditarCashback
);
processarTransacaoPix(
    "empresa@pix.com",
    7500,
    auditarTransacaoSuspeita
);
processarTransacaoPix(
    "cliente@exemplo.com",
    100,
    (transacao) => {
        const valorComDesconto = transacao.valor - 5;
        console.log("\n[ DESCONTO ]");
        console.log(Valor original: R$ ${transacao.valor.toFixed(2)});
        console.log(Desconto aplicado: R$ 5,00);
        console.log(Valor final: R$ ${valorComDesconto.toFixed(2)});
    }
);
processarTransacaoPix(
    "cliente@exemplo.com",
    0,
    emitirComprovantePorEmail
);
function enviarWebhookAssincrono(transacao, callbackFinalizacao) {
    console.log("\n[ WEBHOOK ]");
    console.log(Notificação agendada às ${new Date().toLocaleTimeString()});
    console.log("Enviando notificação para a loja externa...");
    setTimeout(() => {
        console.log(
            Webhook executado às ${new Date().toLocaleTimeString()}
        );
        console.log(Transação notificada: ${transacao.id});
  
        callbackFinalizacao(transacao);
    }, 2000);
}
processarTransacaoPix(
    "loja@payfast.com",
    250,
    (transacao) => {
        enviarWebhookAssincrono(transacao, (transacaoFinalizada) => {
            console.log("\n[ FINALIZAÇÃO ]");
            console.log(
                Notificação da transação ${transacaoFinalizada.id} concluída!
            );
        });
    }
);