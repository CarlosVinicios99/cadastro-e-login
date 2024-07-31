package carpelune.auth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import carpelune.auth.dto.LoginRequestDTO;
import carpelune.auth.dto.LoginResponseDTO;
import carpelune.auth.dto.RegisterRequestDTO;
import carpelune.auth.dto.RegisterResponseDTO;
import carpelune.auth.services.AuthService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/auth")
@Tag(name = "Authentication", description = "Serviços de autenticação")
public class AuthController {
	
	@Autowired
	private AuthService authService;
	
	
	@Operation(
		summary = "Cria uma nova empresa"
	)
	@PostMapping("/login")
	public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDto){
		return this.authService.login(loginRequestDto);
	}
	
	
	@Operation(
		summary = "Cria uma nova empresa"
	)
	@PostMapping("/register")
	public ResponseEntity<RegisterResponseDTO> register(@RequestBody RegisterRequestDTO registerRequestDto){
		return this.authService.register(registerRequestDto);
	}
	
}
