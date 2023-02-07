function cnpjFormat(cnpj) {
	console.log(cnpj.length);
	if (cnpj.length == 2) {
		document.getElementById("CNPJ").value += ".";
	}
	if (cnpj.length == 6) {
		document.getElementById("CNPJ").value += ".";
	}
	if (cnpj.length == 10) {
		document.getElementById("CNPJ").value += "/";
	}
	if (cnpj.length == 15) {
		document.getElementById("CNPJ").value += "-";
	}
	//
	console.log(cnpj);
}

function cnpjFClear() {
	document.getElementById("CNPJ").value = "";
}

function obsClear() {
	document.getElementById("obs").value = "";
}

function razSoC() {
	document.getElementById("razSoc").value = "";
}

function modelo(opt) {
	let select = document.querySelector("select[name='modelo']");

	while (select.children.length) {
		select.removeChild(select.lastChild);
	}

	// Cria option "default"
	let defaultOpt = document.createElement("option");
	defaultOpt.disabled = true;
	defaultOpt.selected = true;
	defaultOpt.textContent = "Selecione uma opção";
	select.appendChild(defaultOpt);

	opt.forEach(function (option) {
		let optEl = document.createElement("option");
		optEl.value = option.value;
		optEl.textContent = option.text;

		select.appendChild(optEl);
	});
}

function getEqp(valor) {
	console.log(valor);

	switch (valor) {
		case "Prisma Super Fácil":
			modelo([
				{
					value: "Super Fácil R01",
					text: "Super Fácil R01"
				},
				{
					value: "Super Fácil R02",
					text: "Super Fácil R02"
				},
				{
					value: "Super Fácil R02",
					text: "Super Fácil R02"
				},
				{
					value: "Super Fácil R03",
					text: "Super Fácil R03"
				},
				{
					value: "Super Fácil R04",
					text: "Super Fácil R04"
				}
			]);
			break;

		case "Prisma SF Adv":
			modelo([
				{
					value: "R1",
					text: "R1"
				},
				{
					value: "R2",
					text: "R2"
				},
				{
					value: "R3",
					text: "R3"
				},
				{
					value: "R4",
					text: "R4"
				},
				{
					value: "R5",
					text: "R5"
				}
			]);
			break;

		case "Prisma":
			modelo([
				{
					value: "Prisma E",
					text: "Prisma E"
				},
				{
					value: "Prisma F",
					text: "Prisma F"
				},
				{
					value: "Prisma G",
					text: "Prisma G"
				},
				{
					value: "Prisma H",
					text: "Prisma H"
				},
				{
					value: "Prisma I",
					text: "Prisma I"
				},
				{
					value: "Prisma J",
					text: "Prisma J"
				},
				{
					value: "Prisma K",
					text: "Prisma K"
				}
			]);
			break;

		case "Ponto E adv":
			modelo([
				{
					value: "Ponto E Adv A",
					text: "Ponto E Adv A"
				},
				{
					value: "Ponto E Adv B",
					text: "Ponto E Adv B"
				},
				{
					value: "Ponto E Adv C",
					text: "Ponto E Adv C"
				},
				{
					value: "Ponto E Adv D",
					text: "Ponto E Adv D"
				},
				{
					value: "PontoNTO E Adv E",
					text: "Ponto E Adv E"
				}
			]);
			break;

		case "Ponto E":
			modelo([
				{
					value: "Ponto E A",
					text: "Ponto E A"
				},
				{
					value: "Ponto E B",
					text: "Ponto E B"
				}
			]);
			break;

		case "Compacto":
			modelo([
				{
					value: "Compacto R01",
					text: "Compacto R01"
				}
			]);
			break;

		case "Hexa":
			modelo([
				{
					value: "Hexa A",
					text: "Hexa A"
				},
				{
					value: "Hexa B",
					text: "Hexa B"
				},
				{
					value: "Hexa C",
					text: "Hexa C"
				},
				{
					value: "Hexa D",
					text: "Hexa D"
				},
				{
					value: "Hexa E",
					text: "Hexa E"
				}
			]);
			break;

		case "Hexa Adv":
			modelo([
				{
					value: "Hexa Adv A",
					text: "Hexa Adv A"
				},
				{
					value: "Hexa Adv B",
					text: "Hexa Adv B"
				},
				{
					value: "Hexa Adv C",
					text: "Hexa Adv C"
				},
				{
					value: "Hexa Adv D",
					text: "Hexa Adv D"
				},
				{
					value: "Hexa Adv E",
					text: "Hexa Adv E"
				}
			]);
			break;

		default:
			modelo([
				{
					value: valor,
					text: valor
				}
			]);
	}
}

function gerarPDF() {
	let valor = document.getElementById("eqp").value;
	let model = document.getElementById("mol").value;
	let cnpj = document.getElementById("CNPJ").value;
	let obs = document.getElementById("obs").value;
	let tec = document.getElementById("nomeTec").value;
	let razSoc = document.getElementById("razSoc").value;
    let os = document.getElementById("os").value;
    let codBlock = document.getElementById("codBlock").value;
    let motivoBlock = document.getElementById("motivoBlock").value;
    let lacreAnt = document.getElementById("lacreAnt").value;
    let lacreNov = document.getElementById("lacreNov").value;
    let numSerie = document.getElementById("numSerie").value;

    var pop = window.open();

	pop.print(
		(pop.document.body.innerHTML =
			"<!DOCTYPE html><html lang='pt-br'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='I=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>body{font-size: 22px;}h1 {text-align: center;}h2 {text-align: left;display: inline;}h3 {display: inline;}p {display: inline;font-size: 22px;}input {width: auto;}div {text-align: center;}</style><title></title></head><body><h1><b>FORMULARIO DE DESBLOQUEIO</b></h1><br><h2>Ordem de Serviço:</h2><p>"+ os +"</p><br><h2>Técnico: </h2><p>" +
            tec +
            "</p><br><br><h3>Razão Social: </h3><p>" +
            razSoc +
            "</p><br><h3>CNPJ: </h3><p>" +
            cnpj +
            "</p><br><br><h3>Equipamento: </h3><p>" +
            valor +
            "</p><h3> | Modelo: </h3><p>" +
            model +
            "</p><br><h3>Num Serie: </h3><p></p>" + numSerie +"<br><br><h3>Código de Bloqueio: </h3><p>"+ codBlock +"</p><br><h3>Motivo do Bloqueio: </h3><p>"+ motivoBlock +"</p><br><br><h3>Lacre Antigo: </h3><p>"+ lacreAnt +"</p><br><h3>Lacre Novo:</h3><p>"+ lacreNov +"</p><br><br><h3>Observação: </h3><p>" +
            obs +
            "</p><br><br><br><br><br><br><br><br><br><br><h1>CF do BRASIL</h1></body></html>")
	);
}
