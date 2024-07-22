package carpelune.auth.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import carpelune.auth.dto.LoginRequestDTO;
import carpelune.auth.dto.LoginResponseDTO;
import carpelune.config.security.TokenService;
import carpelune.user.models.User;
import carpelune.user.repositories.UserRepository;

@Service
public class AuthService {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private TokenService tokenService;
	
	
	public ResponseEntity<LoginResponseDTO> login(LoginRequestDTO loginRequestDto){
		
		try {
			User user = this.userRepository.findByEmail(loginRequestDto.email()).get();
			if(this.passwordEncoder.matches(user.getPassword(), loginRequestDto.password())) {
				String token = this.tokenService.generateToken(user);
				return ResponseEntity.status(HttpStatus.OK).body(new LoginResponseDTO(user.getName(), token));
			}
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
		}
		catch(Exception error) {
			return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).build();
		}
	}
	
	
}
