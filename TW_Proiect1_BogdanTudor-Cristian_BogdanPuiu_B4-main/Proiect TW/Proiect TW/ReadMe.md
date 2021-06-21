# Proiect-TW
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <header>
        <h1>Whaf (What the food)</h1>
        <dl>
            <dt>Authors</dt>
            <dd><a href="https://github.com/BogdanPuiu04">Bogdan Puiu</a> (2B4), <a href="https://github.com/BogdanTudorCrst07">Bogdan Tudor-Cristian</a> (2B4)
            <dt>Coordinator</dt>
            <dd><a href="https://github.com/acip">Amariei Ciprian</a></dd>
            <dt>Faculty of Computer Science, "Alexandru Ioan Cuza" University, Iași, Romania</dt>
            <dt>Web Tehnologies Course</dt>
        </dl>
    <div role="contentinfo">
        <ol role="directory">
            <li><a href="#1-project-details">Project Details</a> </li>
            <li><a href="#2-introduction">Introduction</a> </li>
            <ol>
                <li><a href="#21-the-project">The Project</a></li>
                <li><a href="#22-the-gamification-system">What the Food</a></li>
            </ol>
            <li><a href="#3-user-interface">User Interface</a>
                <ol role="structure-directory">
                    <li><a href="#31-landing-page">Landing Page</a></li>
                    <li><a href="#32-my-account-page">Log In</a></li>
                    <ol>
                        <li><a href="#321-the-user-is-logged-in">The user is logged in</a></li>
                        <li><a href="#322-the-user-is-not-logged-in">The user is not logged in</a></li>
                    </ol>
                    <li><a href="#33-gamification-system-creation-page">Register Page</a></li>
                    <li><a href="#34-gamification-system-view-page">Search Page</a></li>
                    <li><a href="#35-gamification-system-modify-page">Add Recipe Page</a></li>
                    <li><a href="#37-admin-panel">Admin options</a></li>
                </ol>
            </li>
            <li><a href="#4-use-cases">Use-cases</a>
            <ol>
                <li><a href="#41-the-user-creates-a-new-gamification-system">The user searches for a new recipe</a></li>
                <li><a href="#42-the-user-views-one-of-his-gamification-systems">The user adds a new recipe</a></li>
                <li><a href="#43-the-user-modifies/deletes-one-of-his-gamification-systems">The user logs in into an existing account</a></li>
                <li><a href="#44-the-user-wants-to-access-the-admin-panel">The user using the register option</a></li>
                <li><a href="#45-the-user-wants-to-access/post-data-about-a-gamification-system">The user uses the admin privileges to delete a recipe or a recipe image</a></li>
            </ol>
            </li>
            <ol>
                <li><a href="#61-website-overview">Website overview</a></li> 
                <li><a href="#62-how-the-gamification-systems-are-implemented">How the website was created</a></li>
            </ol> 
            </li>
        </ol>
    </div>
    <section id="project-details" role="doc-abstract">
        <h2>1. Project details</h2>
        <p>Se doreste creare unei aplicatii de retete culinare care permite sugerarea de retete pe baza unor ingrediente minimizand numarul de ingrediente suplimentare necesare. Un utilizator va putea adauga retete (ingrediente, pasi de preparare, dificultate, durata preparare, durata finalizare). Vizitatorii pot cauta retete introducand ingredientele pe care le au la dispozitie si o serie de alte criterii suplimentare, cum ar fi: ingrediente suplimentare indezirabile, dificultate, durata preparare, durata finalizare etc.). Lista rezultatelor va putea fi ordonata dupa diverse criterii: popularitate, durata preparare, durata finalizare, dificultate. Utilizatorul poate alege sa marcheze ca a preparat o retata adaugand minim o fotografie cu rezultatul final (in acest fel este determinata popularitate unei retete). Daca utilizatorul care cauta o reteta nu este autentificat, atunci preferintele ultimei cautari vor fi salvate la nivel de browser, altfel in contul utilizatorului respectiv. Se vor oferi clasamente in formatele HTML, CSV si JSON cu cele mai populare retete, cele mai populare ingrediente, ingredientele cele mai evitate.</p>
    </section>
    <section id="introduction" role="doc-introduction">
        <h2>2. Introduction</h2>
        <p>WhaF was implemented by Bogdan Puiu and Bogdan Tudor-Cristian, two students of Faculty of computer Scuence and its main role is to help people find easy recipes based on they ingredients they have at hand.</p>
    </section>
    <section id="introduction__project" role="doc-introduction">
        <h3>2.1. The Project</h3>
        <p>Whaf is a website that allows people to input some ingredients and find a recipe that they like, this help people that are not familiar with cooking make amazing meals and learn something new</p>
        <p>Throught a personalized search the user can find the recipe with a minimum numbers of steps, he can also search filtering the search results base on time spent, dificulty and number of steps.</p>
        <p>He also has the posibility of saving his favorite recepies using the "Favorites" function.</p>
        <p>The user also has the posibility of creating an account so he can see his favorite recipies. If he doesnt have oen he can create one.</p>
    </section>
    <section id="structure" role="doc-structure">
        <h2>3. User Interface</h2>
        <p>Every page has a very intuitive navigation bar that will help the user easily navigate trought the website. Also the pages have very easy to understand functions that help the user easily manipulate the website for its intendet purpose.</p>
    </section>
    <section id="structure__landing" role="doc-structure">
        <h3>3.1. Home Page</h3>
        <p>This is the page that will welcome the user to our website, it presents the website and what will it do for the user, its very easy to use and has a very simple and inviting design</p>
    </section>
    <section id="structure__myacc" role="doc-structure">
        <h3>3.2. Log In Page</h3>
    </section>
    <section id="structure__myacc_logged" role="doc-structure">
        <h4>3.2.1. The user is logged in</h4>
        <p>The user will be able to log in trought the "Log in" button in the navigation bar, he will use the credentials that he used for his registration. After the user is logged in he may get out of his account using the "Log off " button that will only appear after he is logged in.Favorites section will also appear after the user is in his account.</p>
    </section>
    <section id="structure__creationpage" role="doc-structure">
        <h3>3.3. Register Page</h3>
        <p>If the user doesnt have an account he can create one using unique credentials. After he created an account he will be redirected to the login page so he can login with his new credentials.</p>
    </section>
    <section id="structure__viewpage" role="doc-structure">
        <h3>3.4.Search Page</h3>
        <p>The user here can search a recipe based on the ingredients he has. He can searhc recipes based on time, dificulty, number of steps and popularity.Also each recipe can be added to the favorite list of the user, an image can added by the user.</p>
    </section>
    <section id="structure__modifypage" role="doc-structure">
        <h3>3.5. Ad a Recipe Page</h3>
        <p>If the user wishes so he can add a recipe of its own. This can be done by completing all the forms with the necesary information that is needed for that recipe.</p>
    </section>
    <section id="structure__documentationpage" role="doc-structure">
        <h3>3.6. Admin Options</h3>
        <p>If the user is an admin of the page he will be able to both delete recipes so that they dont appear as a search result in the search page and delete a photo that has been added in a recipe section.</p>
    </section>
        <h2>4. Use cases</h2>
    </section>
    <section id="use-cases__newsystem" role="doc-structure">
        <h3>4.1. The user searches for a new recipe</h3>
        <p>When the user will access the "Recipe" panel he will be able to input some ingredients and the website will provide him with  a list of recipes that contains those ingredients.The different filters will allow the user to select what kind of recipe he will get.</p>
    </section>
    <section id="use-cases__viewsystem" role="doc-structure">
        <h3>4.2. The user adds a Recipe of its own</h3>
        <p>In the "Add Recipe" panel the user will input his own recipe as well as categorize it himself, depending on its difficulty, time spent and ingredients.</p>
    </section>
    <section id="use-cases__modifydeletesystem" role="doc-structure">
        <h3>4.3. The user logs in into an existing account</h3>
        <p>Here the user inputs his credentials so he log in with his account after this he can see his favorite recepies or he log out if he wants too.</p>
    </section>
    <section id="use-cases__adminpanel" role="doc-structure">
        <h3>4.4. The user creates an account</h3>
        <p>The user can choose to create an account after this he will be sent to the login page where he can login.</p>
    </section>
    <section id="use-cases__datasystem" role="doc-structure">
        <h3>4.5. he user uses the admin privileges to delete a recipe or a recipe image</h3>
        <p>If an user is an admin he has access to "delete a recipe" option or "delete an image" option, the normal user cannot perform this action.</p>
    </section>
    <section id="implementations" role="doc-structure">
     <section id="use-cases__datasystem" role="doc-structure">
        <h3>5. Documentation</h3>
        <p>The user can register with an unique name(in the server will be verified if it is unique) he will be redirected to the login page where he will be able to login.We verify in our datat base if that user exists and we will compare his input password with the password that has been decrypted from data base.If they both match we will send a JWT token to the front end.The token will contain if the user is an admin or not.</p>
        <p> For our routing we have used as a documentation the folowing repository <a>https://github.com/stefanT9/Routing-In-NodeJs</a></p>
        <p>For jwt token we used <a>https://www.npmjs.com/package/jsonwebtoken</a></p>
        <p>The search component we have used commas to separate ingredients and then we make a POST type request in the data base(the ingredients and the token will be sent).In the data base we look after the recipies that only contain those ingredients.For typo corection we used Propose <a>https://www.npmjs.com/package/propose</a> wich will compare each ingredient from one existent in the data base.If its close to matching they will corect the word if it doesnt the word will be left as it is.The token will be verified to see if the user is logged in as an admin or logged in at all.The recipies will be sorrted by ingredients count and then we will wrap aditional information(like if the user is logged in, the name of the user, etc).Based on the response from the server the user will have the option to delete a recipe or a recipe image.</p>
        <p>The add favorite component will increase the popularity of a receipe and they will be saved in the field of "Favorites" of user in the Data Base.</p>
        <p>Any logged user cand add an image with their finished receipe.We used formidable to parse the files and interpret them in the server side<a>https://www.npmjs.com/package/formidable</a>.An admin can delete an existing photo making a post rewuest to the server sending it the recipe name and the photo name</p>
    </section>
    <section id="implementations" role="doc-structure">
    </header>
</body>
</html>
