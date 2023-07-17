import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioAutenticacaoService } from 'src/app/services/usuario/usuario-autenticacao.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  usuario:Usuario;

  constructor(private usuarioAutenticacaoService:UsuarioAutenticacaoService,
              private router:Router) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  logar():void{    
    this.usuarioAutenticacaoService.autenticar(this.usuario)
      .subscribe({
        next: retorno => this.tratarRetorno(retorno)
      })
  }

  private tratarRetorno(retorno: boolean):void{
    retorno ? this.router.navigate(['/home']) : alert('Usuário e/ou senha inválidos');
  }
}
