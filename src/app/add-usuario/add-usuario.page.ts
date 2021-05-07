import { Component, OnInit } from '@angular/core';
import { Post } from 'src/services/post';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  nome:string = "";
  email:string = "";
  senha:string = "";
  cpf:string = "";
  telefone:string = "";

  constructor(private route:Router, private provider: Post , private routerAct : ActivatedRoute) { }

  ngOnInit() {
    // recuperando dados vindos pela rota
    // this.routerAct.params.subscribe((data:any)=>{
    //   this.id = data.id;
    //   this.nome = data.nome;
    //   this.usuario = data.usuario;
    //   this.senha = data.senha;
    //   this.nivel = data.nivel;
    // });
    //this.id = '1';
  }

  Usuarios(){
    this.route.navigate(['usuarios']);
  }

  cadastrar(){
    return new Promise(resolve =>{
      let dados = {
        requisicao: "add",
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        cpf: this.cpf,
        telefone: this.telefone  
      };
      this.provider.dadosApi(dados,'api.php').subscribe(data=>{
        console.log(data);
        this.route.navigate(['usuarios'])
      });
    })
  }


  editar(){
    return new Promise(resolve=>{
      let dados = {
        requisicao: 'editar',
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        cpf: this.cpf,
        telefone: this.telefone  
      };
      this.provider.dadosApi(dados,"api.php").subscribe(data=>{
        // faça aqui um teste para verificar se foi editado com sucesso
        // if(data['sucsess']){
          //
                  this.route.navigate[('usuarios')];
        //} else {
          // mostre uma mensagem
//        }

      });
    });
    }



}
