<!DOCTYPE html>
<html lang="fr">
    <head>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134987066-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-134987066-1');
        </script>
        <meta charset="utf-8">
        <meta name="description" content="165">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
        <link rel="icon" type="image/png" href="web/files/favicon.ico">
        <title>Contact - Frédéric DE BENGY PUYVALLEE</title>

        <!-- INITIALISATION DU FICHIER CSS -->
        <link rel="stylesheet" href="web/styles/styles-site.css">
        
        <!-- INITIALISATION DES FICHIERS JAVASCRIPT -->
        <script src="web/library/jquery.js"></script>
        <script src="web/scripts/site.js"></script>
    </head>
    <body id="top">
        <header>
            <div class="flex1">
                <div class="flex2">
                    
                    <!-- ICONE DU MENU HAMBURGER -->
                    <div id="nav-icon1">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                    <!-- LOGO -->
                    <div><a href="index.html"><img src="web/files/logo.png" alt="Logo Frédéric DE BENGY PUYVALLEE - Développeur intégrateur Web"></a></div>
                </div>
                
                <!-- MENU 1 (PRINCIPAL) -->
                <nav id="menu1">
                    <ul>
                        <li><a href="index.html">CV ludique</a></li>
                        <li><a href="parcours.html">Parcours</a></li>
                        <li><a href="realisations.html">Réalisations</a></li>
                        <li><a href="contact.php">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        <main>
            <h1>CONTACT</h1>
            <section>
                <h2>Formulaire de contact</h2>
                <div>
                    <form method="post">
                        <div>
                            <label for="nom">Nom :</label>
                            <input type="text" name="nom" id="nom" required autofocus> 
                        </div>
                        <div>
                            <label for="prenom">Prénom :</label>
                            <input type="text" name="prenom" id="prenom" required>
                        </div>
                        <div>
                            <label for="email">E-mail :</label>
                            <input type="email" name="email" id="email" required>
                        </div>
                        <div>
                            <label for="sujet">Sujet :</label>
                            <input type="text" name="sujet" id="sujet" required>
                        </div>
                        <div>
                            <label for="message">Message :</label>
                            <textarea name="message" id="message" required></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Envoyer votre message">
                        </div>
                    </form>
                    <?php
                        if(isset($_POST['message'])){
                            $position_arobase=strpos($_POST['email'],'@');
                            if($position_arobase===false)
                                echo '<p>Votre email doit comporter le symbole @.</p>';
                            else {
                                $message = $_POST['prenom'] . ' ' . $_POST['nom'] . '<br />' . $_POST['email'] . '<br />' . $_POST['message'];
                                $retour=mail('postmaster@frederic-debengy.name', $_POST['sujet'], $message, 'From : '.$_POST['email']);
                                if($retour)
                                    echo '<p class="envoye">Votre message a bien été envoyé.</p>';
                                else
                                    echo '<p class="erreur">Une erreur est survenue. Veuillez réessayer d\'envoyer votre message.</p>';
                            }
                        }
                    ?>
                </div>
            </section>
        </main>
        <footer>
            <p>Restons en contact</p>
            <ul>
                <li><a href="https://fr.linkedin.com/in/fredericdebengypuyvallee"><img src="web/files/logo-linkedin.png" alt="Logo Linkedin"></a></li>
                <li><a href="http://fr.viadeo.com/fr/profile/fredericdebengypuyvallee"><img src="web/files/logo-viadeo.png" alt="Logo Viadeo"></a></li>
                <li><a href="https://github.com/FredericBP?tab=repositories"><img src="web/files/logo-github.png" alt="Logo GitHub"></a></li>
            </ul>
            <ul class="credits">
                <li>&copy; Frédéric DE BENGY PUYVALLEE 2019 - Tous droits réservés</li>
            </ul>
        </footer>
    </body>
</html>