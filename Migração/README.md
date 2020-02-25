# FEP

## Modificações no site

### Inclusão das meta-tags


```HTML
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript" />
<meta name="description" content="Site oficial da Federação Espírita Pernambucana. Saiba tudo sobre as Palestras, Eventos, Cursos, Grupos de Estudos e o Movimento Espírita de Pernambuco." />
<meta name="author" content="FEP - Federação Espírita Pernambucana" />
<meta name="copyright" content="© 2020 FEP - Federação Espírita Pernambucana" />
```

### Inclusão das bibliotecas CSS e css customizado no header.php

```HTML
	<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
	<link rel="stylesheet" href="https://federacaoespiritape.org/custom/custom.css">
```

### Alteração do footer 

```HTML
<footer class=" text-white-50">
	<section class="footer-main py-16 bg-gray-800">
		<div class="container">
			<div class="text-center">
				<a href="http://federacaoespiritape.org/" target="_blank">
					<img src="https://federacaoespiritape.org/wp-content/uploads/2020/02/fep-logo-branco-centro-1904.png" alt="" width="300" class="mx-auto">
				</a>
			</div>
			<div class="row text-center">
				<div class="col-sm-12 mt-5">
					<div class="mb-2">
						<span><i class="fas fa-map-marker-alt text-white fa-lg mr-1"></i> </span>
						<span><a href="https://goo.gl/maps/Xw4APVjLs7wNFXXF7" target="_blank" class="underline text-white-50 hover-text-white">Avenida João de Barros, 1629 – Espinheiro, Recife – PE</a>
						</span>
					</div>
					<div>
						<span><i class="far fa-envelope text-white fa-lg mr-1"></i> </span>
						<span class="pr-3 border-right mr-3">fep@fepernambucana.org</span>
						<span><i class="fas fa-phone text-white fa-lg mr-1"></i> </span>
						<span>(81) 3241-2157</span>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12">
					<div class="social-icons mt-5 text-center">
						<a href="https://www.facebook.com/Fepernambucana/" target="_blank" class="mr-4 text-gray-500">
							<span> <i class="fab fa-facebook fa-2x   "></i></span></a>
						<a href="https://twitter.com/FespiritaPE/" target="_blank" class="mr-4 text-gray-500">
							<span> <i class="fab fa-twitter fa-2x   "></i></span></a>
						<a href="https://www.instagram.com/federacaoespiritapernambucana/" target="_blank" class="mr-4 text-gray-500">
							<span> <i class="fab fa-instagram fa-2x   "></i></span></a>
						<a href="https://www.youtube.com/channel/UC8PvDlkdXrsk6YXnF94QPkA" target="_blank" class="mr-4 text-gray-500">
							<span> <i class="fab fa-youtube fa-2x   "></i></span></a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="footer-subheader bg-gray-900 py-4">
		<div class="container text-center">
			<span>© 2020				<span class="text-white font-weight-bold"> FEP - Federação Espírita Pernambucana </span>
			</span>
			<!-- <span class="float-right">
				<a href="#!admin">
					<span class="text-white text nodeco"><u>Login como Admin</u> </span>
				</a>
			</span> -->
		</div>
	</section>
</footer>

```

### Inclusão das bibliotecas JS + JS customizado após o footer no footer.php

```HTML
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script src="https://igorescobar.github.io/jQuery-Mask-Plugin/js/jquery.mask.min.js"></script>
<script src="https://federacaoespiritape.org/custom/custom.js"></script>

```

### Inclusão dos ícones das redes sociais do Font-Awesome v5.x 

Alteração da classe do ícone de `fa` para `fab` + `fa-2x mr-3` no arquivo '/inc/header-functions.php' do tema

```PHP
		<div class="social-links clearfix">
			<ul>
				<?php
				$i                     = 0;
				$colormag_links_output = '';
				foreach ( $colormag_social_links as $key => $value ) {
					$link = get_theme_mod( $key, '' );
					if ( ! empty( $link ) ) {
						if ( get_theme_mod( $key . '_checkbox', 0 ) == 1 ) {
							$new_tab = 'target="_blank"';
						} else {
							$new_tab = '';
						}
						$colormag_links_output .= '<li><a href="' . esc_url( $link ) . '" ' . $new_tab . '><i class="fab fa-' . strtolower( $value ) . ' fa-2x mr-3"></i></a></li>';
					}
					$i ++;
				}
				echo $colormag_links_output;
				?>
			</ul>
		</div><!-- .social-links -->

```

### Removendo o post mais recente dos posts de menor destaque 

antes da linha `<div class="single-article">` do arquivo '/inc/widgets/colormag-highlighted-posts-widget.php' do tema

```PHP
<?php
    if($i > 1){
?>
```

E fechar o IF antes do `$i ++;`

### Lista de Plugins utilizados

```HTML
<ul>
        <li>
            Akismet Anti-Spam Ativar | Excluir Usado por milhões, Akismet é possivelmente a melhor maneira do mundo
            para proteger seu blog contra spam. Ele mantém seu site protegido mesmo enquanto você dorme. Para
            começar: ative o plugin Akismet e vá para a página Configurações do Akismet para configurar sua chave
            API. Versão 4.1.3 | Por Automattic | Ver detalhes
        </li>

        <li>
            Selecionar Editor clássico Editor clássico Ativar | Excluir Ativa o editor clássico do WordPress e o
            antigo estilo da tela de edição de posts com TinyMCE, meta boxes e etc. Suporta plugins antigos que
            estendem a tela antiga de edição de posts. Versão 1.5 | Por Colaboradores do WordPress | Ver detalhes
        </li>
        <li>
            Selecionar Elementor Elementor Ativar | Excluir A ferramenta de arrastar e soltar mais avançada para a
            criação de páginas perfeitas compatíveis com qualquer tema e qualquer design. Versão 2.9.2 | Por
            Elementor.com | Ver detalhes
        </li>

        <li>
            Selecionar Essential Addons for Elementor Essential Addons for Elementor Ativar | Excluir The ultimate
            elements library for Elementor page builder plugin for WordPress. Versão 3.8.0 | Por WPDeveloper | Ver
            detalhes
        </li>

        <li>
            Selecionar Everest Forms Everest Forms Ativar | Excluir Drag and Drop contact form builder to easily
            create simple to complex forms for any purpose. Lightweight, Beautiful design, responsive and more.
            Versão 1.6.1 | Por WPEverest | Ver detalhes
        </li>

        <li>
            Selecionar Loginizer Loginizer Ativar | Excluir Loginizer is a WordPress plugin which helps you fight
            against bruteforce attack by blocking login for the IP after it reaches maximum retries allowed. You can
            blacklist or whitelist IPs for login using Loginizer. Versão 1.4.3 | Por Raj Kothari | Ver detalhes
        </li>

        <li>
            Selecionar Social Slider Widget Social Slider Widget Ativar | Excluir Social Slider Widget is a
            responsive slider widget that shows 12 latest images from a public Instagram user and up to 18 images
            from a hashtag. Versão 1.6.5 | Por creativemotion | Ver detalhes
        </li>
    </ul>
```

### wp-config.php

```PHP        
application/x-httpd-php wp-config.php ( PHP script, ASCII text )
<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wwwfede_wp246' );

/** MySQL database username */
define( 'DB_USER', 'wwwfede_wp246' );

/** MySQL database password */
define( 'DB_PASSWORD', 'hp8]7!3XS8' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '3vmu9gycfrcq2kbrg2gqbza3ai1nuifknkweskhsjykl9vb84kt2hpnpcbhuxu7b' );
define( 'SECURE_AUTH_KEY',  'xvxahajz4ngqpms3ojexfvkhvo4ttshrg3si872gndextspu7erzeraa6buar2au' );
define( 'LOGGED_IN_KEY',    'znnkjupfqhdif0eydt5q4hd0nncua8ijvaca9vdmmeljkaoskwfyttano7dcxnke' );
define( 'NONCE_KEY',        'f7ztjsob78es9p0tqpgosoagqzcdowryev4ni6u26yb6dplcpp41huuipushen6c' );
define( 'AUTH_SALT',        'xtafkobkvx8nla1npcln35mli8cif4wsbjpngdcrgkl34fhcx15jvrqlxoob0ul8' );
define( 'SECURE_AUTH_SALT', 'qmgztbbrzdtaso6nwtcihbrfbw6phgww5teheopcuqhufgygav4jaidlg1a1mgjp' );
define( 'LOGGED_IN_SALT',   'q6yonpcwhqdxydwjonq0tfy6kqobupxywbfb7yygt6mqyx6ahk3dvmmbiog8twvq' );
define( 'NONCE_SALT',       'ct8np94uhmqgr3vbvhb4vsadmlrbul1xtwnfgroyjv6tvxrtiknbu1j8tm9hsplc' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp36_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
```
