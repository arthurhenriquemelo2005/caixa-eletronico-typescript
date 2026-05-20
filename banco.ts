import PromptSync from "prompt-sync";

const prompt = PromptSync();


let saldo: number = 500;

while (true){

console.log("=== CAIXA ELETRÔNICO ===");
console.log("[1] Depositar")
console.log("[2] Sacar")
console.log("[3] Mostrar saldo")
console.log("[4] Sair")

let opcao = Number(prompt("Escolha uma das opções: "));

if(isNaN(opcao)){

    console.log("Digite apenas números");
    
}

else if(opcao <= 0 || opcao > 4 ){

    console.log("Escolha inválida");

}

else if (opcao === 1){

    let depositar = Number(prompt("Quanto você quer depositar: "));

    if(isNaN(depositar)){

        console.log("Digite apenas números")

    }
    else if(depositar <= 0){

        console.log("Depósito inválido");

    }else{

    saldo += depositar;

    console.log(`Você depositou R$ ${depositar.toFixed(2)} e agora está com R$ ${saldo.toFixed(2)} de saldo`);

    }

}

else if(opcao === 2){

    
    let saque = Number(prompt("Quanto você quer sacar: "));

    if(isNaN(saque)){

        console.log("Digite apenas números");

    }

   else if(saque <= 0 || saque > saldo){

        console.log("Saque inválido");
    
    } else{

    saldo -= saque

    console.log(`Você sacou ${saque.toFixed(2)} e agora tem R$ ${saldo.toFixed(2)} de saldo`);

    }

   }

else if(opcao === 3 ){

    console.log(`Você tem R$ ${saldo.toFixed(2)} de saldo`);

   }
else if(opcao === 4){

    console.log("Fechando...");
    break

   }
 }