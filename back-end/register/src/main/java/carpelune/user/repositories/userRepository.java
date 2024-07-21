package carpelune.user.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import carpelune.user.models.User;

@Repository
public interface userRepository extends JpaRepository<User, String>{

}
