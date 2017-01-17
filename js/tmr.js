/**********************************************************************
 *                             TMR  JS                                *
 * Created on  : 18 fév. 2016, 11:29:41                               *
 * Author      : Cyol http://cyol.fr/blog                             *
 * Licence     : CC BY                                                *
 * Description : Fonctions générales                                  *
 * Version     : 0.1                                                  *
 **********************************************************************/
/**
 * Pour fonctionnement sans dupplication des canvas sur certains navigateurs (natif android par exemple)
 */
$("canvas").parents("*").css("overflow", "visible");

/*********
 * Déclaration des variables du jeu
 */
var COLONNES = 13;
var LIGNES = 15;
var BASE_RADIUS_HEXAGONE = 60;

var heures = {};
heures[1] = "Le Vaisseau";
heures[2] = "La Sirène";
heures[3] = "Le Faucon";
heures[4] = "La Couronne";
heures[5] = "Le Dragon";
heures[6] = "Les Épées";
heures[7] = "La Lyre";
heures[8] = "Le Serpent";
heures[9] = "Le Poisson Acrobate";
heures[10] = "L'Araignée";
heures[11] = "Le Roseau";
heures[12] = "Le Château Dormant";

var heureDesignation = {};
heureDesignation[1] = "Vaisseau";
heureDesignation[2] = "Sirene";
heureDesignation[3] = "Faucon";
heureDesignation[4] = "Couronne";
heureDesignation[5] = "Dragon";
heureDesignation[6] = "Epees";
heureDesignation[7] = "Lyre";
heureDesignation[8] = "Serpent";
heureDesignation[9] = "PoissonAcrobate";
heureDesignation[10] = "Araignee";
heureDesignation[11] = "Roseau";
heureDesignation[12] = "ChateauDormant";


var CITE = 'cite';
var SANCTUAIRE = 'sanctuaire';
var PLAINES = 'plaines';
var COLLINES = 'collines';
var FORET = 'foret';
var MONTS = 'monts';
var DESERT = 'desert';
var GOUFFRE = 'gouffre';
var NECROPOLE = 'necropole';
var DESOLATION = 'desolation';
var PONT = 'pont';
var MARAIS = 'marais';
var LAC = 'lac';
var FLEUVE = 'fleuve';

var typeTerrain = {};
typeTerrain[CITE] = {};
typeTerrain[CITE].nom = 'Cité';
typeTerrain[CITE].feminin = 'e';
typeTerrain[CITE].pluriel = '';
typeTerrain[SANCTUAIRE] = {};
typeTerrain[SANCTUAIRE].nom = 'Sanctuaire';
typeTerrain[SANCTUAIRE].feminin = '';
typeTerrain[SANCTUAIRE].pluriel = '';
typeTerrain[PLAINES] = {};
typeTerrain[PLAINES].nom = 'Plaines';
typeTerrain[PLAINES].feminin = 'e';
typeTerrain[PLAINES].pluriel = 's';
typeTerrain[COLLINES] = {};
typeTerrain[COLLINES].nom = 'Collines';
typeTerrain[COLLINES].feminin = 'e';
typeTerrain[COLLINES].pluriel = 's';
typeTerrain[FORET] = {};
typeTerrain[FORET].nom = 'Forêt';
typeTerrain[FORET].feminin = 'e';
typeTerrain[FORET].pluriel = '';
typeTerrain[MONTS] = {};
typeTerrain[MONTS].nom = 'Monts';
typeTerrain[MONTS].feminin = '';
typeTerrain[MONTS].pluriel = 's';
typeTerrain[DESERT] = {};
typeTerrain[DESERT].nom = 'Désert';
typeTerrain[DESERT].feminin = '';
typeTerrain[DESERT].pluriel = '';
typeTerrain[GOUFFRE] = {};
typeTerrain[GOUFFRE].nom = 'Gouffre';
typeTerrain[GOUFFRE].feminin = '';
typeTerrain[GOUFFRE].pluriel = '';
typeTerrain[NECROPOLE] = {};
typeTerrain[NECROPOLE].nom = 'Nécropole';
typeTerrain[NECROPOLE].feminin = 'e';
typeTerrain[NECROPOLE].pluriel = '';
typeTerrain[DESOLATION] = {};
typeTerrain[DESOLATION].nom = 'Désolation';
typeTerrain[DESOLATION].feminin = 'e';
typeTerrain[DESOLATION].pluriel = '';
typeTerrain[PONT] = {};
typeTerrain[PONT].nom = 'Pont';
typeTerrain[PONT].feminin = '';
typeTerrain[PONT].pluriel = '';
typeTerrain[MARAIS] = {};
typeTerrain[MARAIS].nom = 'Marais';
typeTerrain[MARAIS].feminin = '';
typeTerrain[MARAIS].pluriel = 's';
typeTerrain[LAC] = {};
typeTerrain[LAC].nom = 'Lac';
typeTerrain[LAC].feminin = '';
typeTerrain[LAC].pluriel = '';
typeTerrain[FLEUVE] = {};
typeTerrain[FLEUVE].nom = 'Fleuve';
typeTerrain[FLEUVE].feminin = '';
typeTerrain[FLEUVE].pluriel = '';

var terrainsHumides = [MARAIS, LAC, FLEUVE];

var nbTypeTerrain = {};
nbTypeTerrain[CITE] = 22;
nbTypeTerrain[SANCTUAIRE] = 6;
nbTypeTerrain[PLAINES] = 30;
nbTypeTerrain[COLLINES] = 14;
nbTypeTerrain[FORET] = 15;
nbTypeTerrain[MONTS] = 16;
nbTypeTerrain[DESERT] = 10;
nbTypeTerrain[GOUFFRE] = 10;
nbTypeTerrain[NECROPOLE] = 8;
nbTypeTerrain[DESOLATION] = 11;
nbTypeTerrain[PONT] = 6;
nbTypeTerrain[MARAIS] = 11;
nbTypeTerrain[LAC] = 10;
nbTypeTerrain[FLEUVE] = 23;

var notationX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
var notationY = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

var typeCases = [
    CITE, DESERT, DESOLATION, FORET, PLAINES, NECROPOLE, PLAINES, GOUFFRE, COLLINES, SANCTUAIRE, DESOLATION, PLAINES, FLEUVE, COLLINES, CITE,
    PLAINES, COLLINES, PLAINES, MONTS, COLLINES, FORET, MARAIS, FLEUVE, LAC, MONTS, CITE, FLEUVE, GOUFFRE, NECROPOLE,
    NECROPOLE, MARAIS, FLEUVE, PONT, MARAIS, CITE, FLEUVE, FORET, MONTS, MARAIS, PONT, LAC, DESERT, FORET, PLAINES,
    FLEUVE, CITE, GOUFFRE, LAC, FLEUVE, FLEUVE, PLAINES, CITE, PONT, FLEUVE, DESOLATION, COLLINES, CITE, SANCTUAIRE,
    MONTS, PLAINES, FORET, PLAINES, MONTS, SANCTUAIRE, FORET, PLAINES, FLEUVE, GOUFFRE, LAC, MONTS, PLAINES, MONTS, FORET,
    CITE, LAC, FLEUVE, FLEUVE, CITE, FLEUVE, FLEUVE, LAC, PLAINES, MARAIS, CITE, NECROPOLE, FORET, PLAINES,
    DESOLATION, MARAIS, GOUFFRE, SANCTUAIRE, PONT, MARAIS, CITE, PLAINES, DESERT, CITE, FLEUVE, PLAINES, PLAINES, DESERT, PLAINES,
    LAC, COLLINES, FORET, PLAINES, DESERT, MONTS, GOUFFRE, FORET, COLLINES, PLAINES, FLEUVE, COLLINES, DESOLATION, PLAINES,
    PLAINES, FORET, MONTS, PLAINES, DESOLATION, NECROPOLE, PLAINES, FLEUVE, FLEUVE, LAC, PONT, GOUFFRE, MONTS, CITE, MONTS,
    MONTS, DESERT, CITE, COLLINES, MARAIS, LAC, FLEUVE, MONTS, MARAIS, FLEUVE, PLAINES, CITE, GOUFFRE, DESERT,
    CITE, FORET, PLAINES, PONT, FLEUVE, DESOLATION, CITE, DESERT, SANCTUAIRE, PLAINES, CITE, DESOLATION, FORET, NECROPOLE, COLLINES,
    FLEUVE, FLEUVE, LAC, SANCTUAIRE, COLLINES, FORET, GOUFFRE, MONTS, COLLINES, DESERT, COLLINES, PLAINES, MONTS, PLAINES,
    CITE, NECROPOLE, MONTS, GOUFFRE, CITE, DESOLATION, DESERT, PLAINES, NECROPOLE, FORET, CITE, COLLINES, PLAINES, DESOLATION, CITE
];

var nomCases = [
    'VIDE', 'de MIEUX', 'de DEMAIN', 'de FALCONAX', 'de TRILKH', 'de ZNIAK', 'de l\'ARC', 'de SHOK', 'de KORREX', 'd\'OLIS', 'd\'HIER', 'SAGES', '', 'de STOLIS', 'de MIELH',
    'd\'ASSORH', 'de DAWELL', 'de RUBEGA', 'CRÂNEURS', 'de TANEGV', 'de BUST', 'BLUANTS', '', 'de LUCRE', 'SALÉS', 'de BRILZ', '', 'des LITIGES', 'de GORLO',
    'de KROAK', 'GLIGNANTS', '', 'de GIOLI', 'FLOUANTS', 'PAVOIS', '', 'TURMIDE', 'TUMÉFIÉS', 'de DOM', 'de ROI', 'de FRICASA', 'de NEIGE', 'de BISSAM', 'de TOUÉ',
    '', 'de FROST', 'd\'OKI', 'de FOAM', '', '', 'd\'AFFA', 'd\'OLAK', 'd\'ORX', '', 'de PARTOUT', 'd\'HUAÏ', 'SORDIDE', 'PLAT',
    'de KANAÏ', 'de FIASK', 'd\'ESTOUBH', 'd\'ORTI', 'BRÛLANTS', 'de PLAINE', 'de GLUSKS', 'd\'IOLISE', '', 'de JUNK', 'de GLINSTER', 'AJOURÉS', 'de XNEZ', 'de QUATH', 'des FURIES',
    'GLAUQUE', 'de MISÈRE', '', '', 'de PANOPLE', '', '', 'des CHATS', 'de FOE', 'ZULTANTS', 'de NOAPE', 'de THROAT', 'des CRIS', 'BRISÉES',
    'de JAMAIS', 'NUISANTS', 'de SUN', 'BLANC', 'd\'IK', 'GLUTANTS', 'de TERWA', 'SANS JOIE', 'de SEL', 'de SERGAL', '', 'de LUFMIL', 'CALCAIRES', 'de SEK', 'des SOUPIRS',
    'd\'ANTICALME', 'de PARTA', 'de GANNA', 'de PSARK', 'de KRANE', 'GURDES', 'de KAFPA', 'd\'OURF', 'de NOIRSEUL', 'NOIRES', '', 'de TOOTH', 'de RIEN', 'BLANCHES',
    'GRISES', 'FADE', 'GRINÇANTS', 'de XIAX', 'de TOUJOURS', 'de XOTAR', 'de TROO', '', '', 'WANITO', 'de YALM', 'ABIMEUX', 'BIGLEUX', 'DESTITUÉE', 'des DRAGÉES',
    'FAINÉANTS', 'de POLY', 'VENIN', 'd\'ENCRE', 'de JAB', 'd\'IAUPE', '', 'BARASK', 'GRONCHANTS', '', 'de MILTIAR', 'FOLLE', 'de GROMPH', 'de SANIK',
    'd\'ONKAUSE', 'TAMÉE', 'de DOIS', 'de FAH', '', 'de POOR', 'de KOLIX', 'de FUMÉE', 'NOIR', 'JAUNES', 'TONNERRE', 'd\'AMOUR', 'de KLUTH', 'd\'ANTINÉAR', 'POURPRES',
    '', '', 'LAINEUX', 'MAUVE', 'SUAVES', 'GUEUSE', 'd\'ÉPISOPHE', 'TAVELÉS', 'CORNUES', 'de NICROP', 'de KOL', 'VENTEUSES', 'DORMANTS', 'de JISLITH',
    'JALOUSE', 'de LOGOS', 'de VDAH', 'GRISANT', 'RIMARDE', 'de PRESQUE', 'de LAVE', 'LAVÉES', 'de ZONAR', 'de JAJOU', 'CRAPAUD', 'RÉVULSANTES', 'd\'ANJOU', 'd\'APRÈS', 'de KLANA'
];

var X = 'x';
var Y = 'y';

var canvasTMR;
var contextTMR;
var canvasPerdu;
var contextPerdu;
var canvasMaitrise;
var contextMaitrise;
var canvasAstrologie;
var contextAstrologie;
var pionJoueur = new Image();
pionJoueur.src = 'img/CyolLego.png';
var affichagePopupPerdu;

var imagesCases = {};

for(var key in typeTerrain)
{
    if (typeTerrain.hasOwnProperty(key))
    {
        if($.inArray(key, terrainsHumides) === -1)
        {
            imagesCases[key] = new Image();
            imagesCases[key].src = 'img/'+key+'.png';
        }
    }
}

//Table des rencontres en TMR
var RENCONTRE_MESSAGER  = "Messager des Rêves";
var RENCONTRE_PASSEUR   = "Passeur des Rêves";
var RENCONTRE_FLEUR     = "Fleur des Rêves";
var RENCONTRE_MANGEUR   = "Mangeur de Rêve";
var RENCONTRE_CHANGEUR  = "Changeur de Rêve";
var RENCONTRE_BRISEUR   = "Briseur de Rêve";
var RENCONTRE_REFLET    = "Reflet d'ancien Rêve";
var RENCONTRE_T_BLANC   = "Tourbillon blanc";
var RENCONTRE_T_NOIR    = "Tourbillon noir";
var RENCONTRE_DRAGON    = "Rêve de Dragon";

//Rencontres alternatives
var RENCONTRE_ALT_REJETON    = "Rejeton d'Oniros";
var RENCONTRE_ALT_FANTOME    = "Fantôme d'Archétype";
var RENCONTRE_ALT_CHAT       = "Chat des Rêves";
var RENCONTRE_ALT_FLEUR      = "Fleur onirivore";
var RENCONTRE_ALT_CRUE       = "Crue du Fleuve";
var RENCONTRE_ALT_FAILLE     = "Faille du Rêve";
var RENCONTRE_ALT_BROUILLARD = "Brouillard d'Oniros";

//Correspondance classique/alternative
var recontres_correspondance_alternatives = {};
recontres_correspondance_alternatives[RENCONTRE_MESSAGER] = RENCONTRE_ALT_REJETON;
recontres_correspondance_alternatives[RENCONTRE_PASSEUR] = RENCONTRE_ALT_FANTOME;
recontres_correspondance_alternatives[RENCONTRE_FLEUR] = RENCONTRE_ALT_CHAT;
recontres_correspondance_alternatives[RENCONTRE_MANGEUR] = RENCONTRE_ALT_FLEUR;
recontres_correspondance_alternatives[RENCONTRE_CHANGEUR] = RENCONTRE_ALT_CRUE;
recontres_correspondance_alternatives[RENCONTRE_BRISEUR] = RENCONTRE_ALT_FAILLE;
recontres_correspondance_alternatives[RENCONTRE_REFLET] = RENCONTRE_ALT_BROUILLARD;
recontres_correspondance_alternatives[RENCONTRE_T_BLANC] = RENCONTRE_T_BLANC;
recontres_correspondance_alternatives[RENCONTRE_T_NOIR] = RENCONTRE_T_NOIR;
recontres_correspondance_alternatives[RENCONTRE_DRAGON] = RENCONTRE_DRAGON;

var compagnonChatDesReves = false;
var rencontres_forces = {};
rencontres_forces[RENCONTRE_MESSAGER]   = "2d4";
rencontres_forces[RENCONTRE_PASSEUR]    = "2d4";
rencontres_forces[RENCONTRE_FLEUR]      = "1d6";
rencontres_forces[RENCONTRE_MANGEUR]    = "1d6";
rencontres_forces[RENCONTRE_CHANGEUR]   = "2d6";
rencontres_forces[RENCONTRE_BRISEUR]    = "2d6";
rencontres_forces[RENCONTRE_REFLET]     = "2d6";
rencontres_forces[RENCONTRE_T_BLANC]    = "2d6";
rencontres_forces[RENCONTRE_T_NOIR]     = "2d8";
rencontres_forces[RENCONTRE_DRAGON]     = "7+dDraconique";
rencontres_forces[RENCONTRE_ALT_REJETON]="2d6";
rencontres_forces[RENCONTRE_ALT_FANTOME]="1d6";
rencontres_forces[RENCONTRE_ALT_CHAT]   ="2d4";
rencontres_forces[RENCONTRE_ALT_FLEUR]  ="2d4";
rencontres_forces[RENCONTRE_ALT_CRUE]   ="1d8";
rencontres_forces[RENCONTRE_ALT_FAILLE] ="2d6";
rencontres_forces[RENCONTRE_ALT_BROUILLARD]="1d6";

var rencontres = {};

//Seuil de Rencontre Bonne par type de lieu
var rencontresBonnes = {};//[RENCONTRE_MESSAGER, RENCONTRE_PASSEUR, RENCONTRE_FLEUR, RENCONTRE_ALT_REJETON, RENCONTRE_ALT_FANTOME, RENCONTRE_ALT_CHAT];
rencontres[CITE]= rencontres[SANCTUAIRE] = {
    25: RENCONTRE_MESSAGER,
    50: RENCONTRE_PASSEUR,
    65: RENCONTRE_FLEUR,
    70: RENCONTRE_MANGEUR,
    80: RENCONTRE_CHANGEUR,
    85: RENCONTRE_BRISEUR,
    90: RENCONTRE_REFLET,
    94: RENCONTRE_T_BLANC,
    97: RENCONTRE_T_NOIR,
    100: RENCONTRE_DRAGON
};
rencontresBonnes[CITE] = rencontresBonnes[SANCTUAIRE] = 65;
rencontres[PLAINES] = rencontres[PONT] = {
    20: RENCONTRE_MESSAGER,
    40: RENCONTRE_PASSEUR,
    55: RENCONTRE_FLEUR,
    60: RENCONTRE_MANGEUR,
    75: RENCONTRE_CHANGEUR,
    82: RENCONTRE_BRISEUR,
    88: RENCONTRE_REFLET,
    93: RENCONTRE_T_BLANC,
    97: RENCONTRE_T_NOIR,
    100: RENCONTRE_DRAGON
};
rencontresBonnes[PLAINES] = rencontresBonnes[PONT] = 55;
rencontres[COLLINES] = rencontres[FORET] = {
    15: RENCONTRE_MESSAGER,
    30: RENCONTRE_PASSEUR,
    42: RENCONTRE_FLEUR,
    54: RENCONTRE_MANGEUR,
    69: RENCONTRE_CHANGEUR,
    82: RENCONTRE_BRISEUR,
    88: RENCONTRE_REFLET,
    93: RENCONTRE_T_BLANC,
    97: RENCONTRE_T_NOIR,
    100: RENCONTRE_DRAGON
};
rencontresBonnes[COLLINES] = rencontresBonnes[FORET] = 42;
rencontres[MONTS] = rencontres[DESERT] = {
    10: RENCONTRE_MESSAGER,
    20: RENCONTRE_PASSEUR,
    26: RENCONTRE_FLEUR,
    44: RENCONTRE_MANGEUR,
    59: RENCONTRE_CHANGEUR,
    75: RENCONTRE_BRISEUR,
    85: RENCONTRE_REFLET,
    92: RENCONTRE_T_BLANC,
    97: RENCONTRE_T_NOIR,
    100: RENCONTRE_DRAGON
};
rencontresBonnes[MONTS] = rencontresBonnes[DESERT] = 26;
rencontres[FLEUVE] = rencontres[LAC] = {
    5: RENCONTRE_MESSAGER,
    10: RENCONTRE_PASSEUR,
    13: RENCONTRE_FLEUR,
    37: RENCONTRE_MANGEUR,
    49: RENCONTRE_CHANGEUR,
    65: RENCONTRE_BRISEUR,
    79: RENCONTRE_REFLET,
    89: RENCONTRE_T_BLANC,
    97: RENCONTRE_T_NOIR,
    100: RENCONTRE_DRAGON
};
rencontresBonnes[FLEUVE] = rencontresBonnes[LAC] = 13;
rencontres[MARAIS] = rencontres[GOUFFRE] = {
    2: RENCONTRE_MESSAGER,
    4: RENCONTRE_PASSEUR,
    5: RENCONTRE_FLEUR,
    29: RENCONTRE_MANGEUR,
    39: RENCONTRE_CHANGEUR,
    60: RENCONTRE_BRISEUR,
    75: RENCONTRE_REFLET,
    86: RENCONTRE_T_BLANC,
    97: RENCONTRE_T_NOIR,
    100: RENCONTRE_DRAGON
};
rencontresBonnes[MARAIS] = rencontresBonnes[GOUFFRE] = 5;
rencontres[NECROPOLE] = rencontres[DESOLATION] = {
    20: RENCONTRE_MANGEUR,
    30: RENCONTRE_CHANGEUR,
    50: RENCONTRE_BRISEUR,
    65: RENCONTRE_REFLET,
    80: RENCONTRE_T_BLANC,
    97: RENCONTRE_T_NOIR,
    100: RENCONTRE_DRAGON
};
rencontresBonnes[NECROPOLE] = rencontresBonnes[DESOLATION] = 0;

/**
 * Déclarations Objets DOM
 */
var $popupText;
var $emplacementEnJeu;
var $cptEndurance;
var $cptFatigue;
var $cptEtat;
var $cptDraconic;
var $cptReve;
var $cptRefoulement;
var $deplacement;
var $rencontresAlternatives;
var $infosVoyageEnTMR;

/*********
 * Déclaration des variables pour en cours de jeu
 */
var jeuEnCours = false;
var enTMR = false;
var roundEnTMR = 0;
var hexagonGrid;
var perduGrid;
var maitriseGrid;
var listeCasesAtteignablesTMR = [];
var hexagones = [];
var positionJoueur = {};
positionJoueur[X] = 0;
positionJoueur[Y] = 1;
var rencontreActive = {};
var etatDeDepart;
var fatigueDeDepart;
var vitesseDeplacement;
var perdu = false;
var recontresAlternatives = false;
var brouillardActif = false;
var brouillardPerturbeDeplacement = false;

/*********
 * Objet hexagone
 */
function $oHexagone(id, x, y, type, nom)
{
    this.oH_id = id;
    this.oH_x = x;
    this.oH_y = y;
    this.oH_type = type;
    this.oH_nom = nom;

    function oH_couleur()
    {
        var color = '#fff';
        if($.inArray(this.oH_type, terrainsHumides) > -1 || this.oH_type === PONT)
        {
            color = '#00f';
        }
        return color;
    }
    this.oH_couleur = oH_couleur;


    function oH_dessine()
    {
        hexagonGrid.drawHexAtColRow(this.oH_x,this.oH_y,this.oH_couleur());
        hexagonGrid.drawContentHexAtColRow(this.oH_x,this.oH_y,notationX[this.oH_x]+notationY[this.oH_y], this.oH_type, typeTerrain[this.oH_type].nom, this.oH_nom, imagesCases[this.oH_type]);
    }
    this.oH_dessine = oH_dessine;

    /**
     * Renvoit la liste des id des voisins dans l'ordre : Haut, haut droite, bas droite, bas, bas gauche, haut gauche
     */
    function oH_getVoisins()
    {
        var listeVoisins = [];
        var x = this.oH_x;
        var y = this.oH_y;
        var yModifie = y;
        if(x%2 === 0)
        {
            yModifie--;
        }

        listeVoisins[0] = getHexagoneIdParCoordonnees(x, y-1);
        listeVoisins[1] = getHexagoneIdParCoordonnees(x+1, yModifie);
        listeVoisins[2] = getHexagoneIdParCoordonnees(x+1, yModifie+1);
        listeVoisins[3] = getHexagoneIdParCoordonnees(x, y+1);
        listeVoisins[4] = getHexagoneIdParCoordonnees(x-1, yModifie+1);
        listeVoisins[5] = getHexagoneIdParCoordonnees(x-1, yModifie);
        return listeVoisins;
    }
    this.oH_getVoisins = oH_getVoisins;

    /**
     * La direction doit être entre 0 et 5
     * @param direction
     * @returns {*}
     */
    function oH_getVoisinDirection(direction)
    {
        var listeVoisins = this.oH_getVoisins();
        if(direction >= 0 && direction <=5)
        {
            return listeVoisins[direction];
        }
        else if(direction === -1)
        {
            //Sur place
            return this.oH_id;
        }
        else
        {
            console.log("ERREUR ! DIRECTION NON CONNUE");
        }
    }
    this.oH_getVoisinDirection = oH_getVoisinDirection;

    function oH_estVoisin(idHexagone)
    {
        return $.inArray(idHexagone, this.oH_getVoisins()) !== -1;
    }
    this.oH_estVoisin = oH_estVoisin;
}

/*********
 * Fonctions
 */

//Fonctions pour faciliter le calcul de distance
function Hex(q, r, s) {
    return {q: q, r: r, s: s};
}
function OffsetCoord(col, row) {
    return {col: col, row: row};
}
var offsetCol = -1;
function qoffset_from_cube(offset, h)
{
    var col = h.q;
    var row = h.r + Math.trunc((h.q + offset * (h.q & 1)) / 2);
    return OffsetCoord(col, row);
}

function qoffset_to_cube(offset, h)
{
    var q = h.col;
    var r = h.row - Math.trunc((h.col + offset * (h.col & 1)) / 2);
    var s = -q - r;
    return Hex(q, r, s);
}

function hex_length(hex)
{
    return Math.trunc((Math.abs(hex.q) + Math.abs(hex.r) + Math.abs(hex.s)) / 2);
}

function hex_add(a, b)
{
    return Hex(a.q + b.q, a.r + b.r, a.s + b.s);
}

function hex_subtract(a, b)
{
    return Hex(a.q - b.q, a.r - b.r, a.s - b.s);
}
function hex_distance(a, b)
{
    return hex_length(hex_subtract(a, b));
}

function offset_distance(a, b)
{
    var ac = qoffset_to_cube(offsetCol,a);
    var bc = qoffset_to_cube(offsetCol,b);
    return hex_distance(ac, bc);
}

function hex_hexaAPortee(a, porte)
{
    var results = [];
    for(var i = a.q-porte; i <= a.q +porte; i++)
    {
        for(var j = a.r-porte; j <= a.r+porte; j++)
        {
            for(var k = a.s-porte; k <= a.s+porte; k++)
            {
                if(i+j+k === 0)
                {
                    results.push(Hex(i,j,k));
                }
            }
        }
    }
    return results;
}

function offset_hexaAPortee(a, porte)
{
    var results = [];
    var ac = qoffset_to_cube(offsetCol,a);
    var results_hex = hex_hexaAPortee(ac, porte);
    for (var i = 0; i < results_hex.length; i++)
    {
        results[i] = qoffset_from_cube(offsetCol, results_hex[i]);
    }
    return results;
}

function caseTMRAleatoire()
{
    var caseTMR = {};
    caseTMR.x = lanceD(1, COLONNES, false);

    var lignes = LIGNES;
    if(caseTMR.x%2 === 1)
    {
        lignes--;
    }
    caseTMR.y = lanceD(1, lignes, false);
    return caseTMR;
}

function getHexagoneIdParCoordonnees(x,y)
{
    for(var key in hexagones)
    {
        if (hexagones.hasOwnProperty(key))
        {
            if(hexagones[key].oH_x === x && hexagones[key].oH_y === y )
            {
                return parseInt(key);
            }
        }
    }
    return null;
}

/**
 * @desc Lancer des dés à "faces" faces
 * @param nDes int
 * @param nFaces nombres de faces sur un d
 * @returns {Array} Résultats de nDés entre 1 et sum(faces)
 */
function diceRoll(nDes, nFaces) {
    //On récupère le nombre global de possibilités dans faces
    var rollResultat = [];
    var aRoll;
    for (var i = 0; i < nDes; i++ ){
        aRoll = Math.floor(Math.random()*nFaces);
        rollResultat[rollResultat.length] = aRoll+1;
    }
    return (rollResultat);
}

/**
 *
 * @param nDes
 * @param nFaces
 * @param debutA1 si à false, un d8, par exemple, renverra de 0 à 7
 * @returns {number}
 */
function lanceD(nDes, nFaces, debutA1)
{
    if(typeof debutA1 === "undefined")
    {
        debutA1 = true;
    }
    var dResultat = 0;
    var d = diceRoll(nDes, nFaces);
    for(var i = 0; i< d.length; i++)
    {
        dResultat += d[i];
    }
    if(!debutA1)
    {
        dResultat--;
    }
    return dResultat;
}

/**
 * D8, le 8 vaut 0, le 7 est explosif
 */
function dDr()
{
    var resultat = 0;
    var dResultat;
    do
    {
        dResultat = lanceD(1, 8, false);
        resultat+=dResultat;
    } while(dResultat === 7);
    return resultat;
}

/**
 * Obtenir le % en fonction de Carac / difficulte
 */
function getPourcentageChance(carac, difficulte)
{
    if( difficulte < -16)
    {
        return 0;
    }
    else if( difficulte < -10)
    {
        return 1;
    }
    return Math.max(1,Math.floor(carac*(Math.max(0.25,(difficulte+10)/2))));
}

function getReussiteParticuliereSeuil(pourcentage, difficulte)
{
    if( difficulte < -10)
    {
        return 0;
    }
    return Math.max(1,Math.ceil(pourcentage*0.2));
}

function getReussiteSignificativeSeuil(pourcentage, difficulte)
{
    if( difficulte < -10)
    {
        return 0;
    }
    return Math.max(1, Math.floor(pourcentage*0.5));
}

function getEchecParticulierSeuil(pourcentage, difficulte)
{
    if( difficulte < -16)
    {
        return 0;
    }
    else if( difficulte < -10)
    {
        return 2;
    }
    return Math.min(101,100-(Math.floor((100-pourcentage)*0.2)));
}

function getEchecTotalSeuil(pourcentage, difficulte)
{
    if( difficulte < -10)
    {
        switch (difficulte)
        {
            case -11 :
                return 90;
                break;
            case -12 :
                return 70;
                break;
            case -13 :
                return 50;
                break;
            case -14 :
                return 30;
                break;
            case -15 :
                return 10;
                break;
            case -16 :
                return 2;
                break;
            default :
                return 1;
                break;
        }
    }
    return Math.min(101,100-(Math.floor((100-pourcentage)*0.1)));
}

function calculPourcentage()
{
    var carac   = parseInt($("#caracteristique").val());
    var comp    = parseInt($("#competence").val());
    var bonMal  = parseInt($("#bonusMalus").val());
    var difficulte = comp+bonMal;
    var pourcentage = getPourcentageChance(carac, difficulte);

    var $sliderParticuliere = $('a[aria-labelledby="particuliere-label"]').parent();
    var $sliderSignificative = $('a[aria-labelledby="significative-label"]').parent();

    var $sliderEchecParticulier = $('a[aria-labelledby="echecParticulier-label"]').parent();
    var $sliderEchecTotal = $('a[aria-labelledby="echecTotal-label"]').parent();

    $("#pourcentage").val(Math.min(99,pourcentage)).slider('refresh');
    $("label[for=pourcentage]").addClass('actif');
    if(difficulte > -11)
    {
        $sliderParticuliere.show();
        $("#particuliere").val(getReussiteParticuliereSeuil(pourcentage, difficulte)).slider('refresh');
        $("label[for=particuliere]").addClass('actif');
        $sliderSignificative.show();
        $("#significative").val(getReussiteSignificativeSeuil(pourcentage, difficulte)).slider('refresh');
        $("label[for=significative]").addClass('actif');
    }
    else
    {
        $("#particuliere").val("");
        $sliderParticuliere.hide();
        $("label[for=particuliere]").removeClass('actif');
        $("#significative").val("");
        $sliderSignificative.hide();
        $("label[for=significative]").removeClass('actif');
    }
    if(pourcentage>100)
    {
        $("#echecParticulier").val("");
        $sliderEchecParticulier.hide();
        $("label[for=echecParticulier]").removeClass('actif');
        $("#echecTotal").val("");
        $sliderEchecTotal.hide();
        $("label[for=echecTotal]").removeClass('actif');
    }
    else
    {
        $sliderEchecParticulier.show();
        $("#echecParticulier").val(getEchecParticulierSeuil(pourcentage, difficulte)).slider('refresh');
        $("label[for=echecParticulier]").addClass('actif');
        $sliderEchecTotal.show();
        $("#echecTotal").val(getEchecTotalSeuil(pourcentage, difficulte)).slider('refresh');
        $("label[for=echecTotal]").addClass('actif');
    }
    lanceD100();
}

function demireveAleatoire()
{
    var caseTMR = caseTMRAleatoire();
    $("#demireveAleatoire").val(infoDemireve(caseTMR.x, caseTMR.y, false));

    $("#boutonDemireveAleatoire").blur();
}

function lanceJetStress()
{
    var ptsStress   = parseInt($("#ptsStress").val());
    var ptsReves    = parseInt($("#ptsReves").val());
    var vocation    = parseInt($("#vocation").val());
    //Jet de Stress toujours à difficulté 0
    var pourcentage = getPourcentageChance(ptsReves, 0);
    var jet = lanceD(1, 100);
    var infosStress = testStress(ptsStress, pourcentage, jet, 0, vocation);

    $("#stressTransforme").val(infosStress.xp);
    $("#infosStress").empty().append(infosStress.typeResultat + " (" + jet + " sur " + pourcentage + ") : "+infosStress.taux*100+"%");
    $("#boutonJetStress").blur();
}

function testStress(stress, pourcentage, jet, difficulte, vocation)
{
    if(typeof difficulte === "undefined")
    {
        difficulte = 0;
    }
    if(typeof vocation === "undefined")
    {
        vocation = 0;
    }
    var listeTauxGain = {eTotal : 0, ePart : 0.1, echec : 0.2, norm : 0.5, sign : 0.75, part : 1, dPart : 1.5};
    if(vocation === 1)
    {
        listeTauxGain = {eTotal : 0.2, ePart : 0.3, echec : 0.5, norm : 0.75, sign : 1, part : 1.5, dPart : 2};
    }
    var infosStress = {};

    infosStress.typeResultat = "Echec";
    var tauxGain = listeTauxGain.echec;
    if(jet >= getEchecTotalSeuil(pourcentage, difficulte))
    {
        infosStress.typeResultat = "Ech.T.";
        tauxGain = listeTauxGain.eTotal;
    }
    else if(jet >= getEchecParticulierSeuil(pourcentage, difficulte))
    {
        infosStress.typeResultat = "Ech.P.";
        tauxGain = listeTauxGain.ePart;
    }
    else if(jet <= pourcentage && jet <100)
    {
        infosStress.typeResultat = "Norm.";
        tauxGain = listeTauxGain.norm;
        if (jet <= getReussiteSignificativeSeuil(pourcentage, difficulte))
        {
            infosStress.typeResultat = "Sign.";
            tauxGain = listeTauxGain.sign;
            if( jet <= getReussiteParticuliereSeuil(pourcentage, difficulte))
            {
                infosStress.typeResultat = "Part.";
                tauxGain = listeTauxGain.part;
                //On retente un jet, si Particulière ou Significative, ça donne une DoubleParticulière et 150% de gain de PX
                jet = lanceD(1, 100);
                if (jet <= getReussiteSignificativeSeuil(pourcentage, difficulte))
                {
                    infosStress.typeResultat = "D.Part.";
                    tauxGain = listeTauxGain.dPart;
                }
            }
        }
    }
    infosStress.taux = tauxGain;
    infosStress.xp = Math.floor((stress*tauxGain));
    return infosStress;
}

function lanceD100()
{
    var jet = lanceD(1, 100);
    $("#d100").val(jet);
    $("#boutonD100").blur();
    $("#boutonJetResolution").blur();
    $("#jetResolution").val(jet);

    var carac   = parseInt($("#caracteristique").val());
    var comp    = parseInt($("#competence").val());
    var bonMal  = parseInt($("#bonusMalus").val());
    var difficulte = comp+bonMal;
    var pourcentage = getPourcentageChance(carac, difficulte);
    var resultat = "Échec";
    var tache = "0";
    var qualite = -2;
    if(jet >= getEchecTotalSeuil(pourcentage, difficulte))
    {
        resultat = "Échec total";
        tache = "-4";
        qualite = -6;
    }
    else if(jet >= getEchecParticulierSeuil(pourcentage, difficulte))
    {
        resultat = "Échec particulier";
        tache = "-2";
        qualite = -4;
    }
    else if(jet <= pourcentage && jet <100)
    {
        resultat = "Réussite";
        tache = "+1";
        qualite = 0;
        if (jet <= getReussiteSignificativeSeuil(pourcentage, difficulte))
        {
            resultat = "Réussite significative";
            tache = "+2";
            qualite = 1;
            if( jet <= getReussiteParticuliereSeuil(pourcentage, difficulte))
            {
                resultat = "Réussite particulière";
                tache = "+3";
                qualite = 2;
                jet = lanceD(1, 100);
                if (jet <= getReussiteSignificativeSeuil(pourcentage, difficulte))
                {
                    resultat = "Double particulière (uniquement sur Jet de stress, sinon Particulière. 2ème jet : " + jet + ")";
                }
            }
        }
    }
    //information Réussite
    $("#jetResultat").val(resultat);
    //Information Tâche
    $("#jetTache").val(tache);
    //information Qualité
    $("#jetQualite").val(qualite+comp);
}


function lanceDdr()
{
    var x = dDr();
    $("#ddr").val(x);
    $("#boutonDDr").blur();
}

function lanceDSelect()
{
    var nbFaces = parseInt($("#select-d").val());
    var x = lanceD(1,nbFaces);
    $("#d").val(x);
    $("#boutonDSelect").blur();
}

function lanceNbAstral()
{
    var x = lanceD(1,12);

    $("#nbAstral").val(x).slider('refresh');
    $("#boutonNbAstral").blur();
    calculAstrologie();
}

function calculAstrologie()
{
    var nbAstral = parseInt($("#nbAstral").val());
    var heureNaissance = parseInt($("input[name=heureNaissance]:checked").val());
    dessineRoueAstrologique();
    if(!isNaN(heureNaissance))
    {
        var heureTresFavorable = nbAstral + heureNaissance;
        positionneHeures(heureTresFavorable);
    }
}

function dessineRoueAstrologique()
{
    var radius = (canvasAstrologie.height / 2);
    //Cercle extérieur
    var radiusExt = radius*0.9;
    contextAstrologie.beginPath();
    contextAstrologie.arc(0,0, radiusExt, 0, 2*Math.PI);
    contextAstrologie.fillStyle = "lightyellow";
    contextAstrologie.fill();
    //DemiCercle
    contextAstrologie.beginPath();
    contextAstrologie.arc(0,0, radiusExt, 0.5*Math.PI, 1.5*Math.PI);
    contextAstrologie.fillStyle = "lightblue";
    contextAstrologie.fill();

    //Cercle intérieur
    var radiusInt = radius*0.6;
    contextAstrologie.beginPath();
    contextAstrologie.arc(0,0, radiusInt, 0, 2*Math.PI);
    contextAstrologie.fillStyle = "#333";
    contextAstrologie.fill();

    var ang;
    var num;
    for ( num = 1; num <= 12; num++)
    {
        var imageHeure = new Image();
        imageHeure.src='img/rddHeure'+heureDesignation[num]+'.png';
        ang = (num-1) * Math.PI / 6;
        positionneAffichage(radiusExt, ang);
        //Le 0, 0 est le point central où l'image sera placée, on position donc x et y à respectivement -width/2 et -height/2 pour bien centrer l'image
        contextAstrologie.drawImage(imageHeure, -32, -27, 65, 55);
        reinitialisationPointOrigine(radiusExt, ang);
    }
}

function positionneAffichage(radius, ang)
{
    contextAstrologie.rotate(ang);
    contextAstrologie.translate(0, -radius*0.85);
    contextAstrologie.rotate(-ang);
}

function reinitialisationPointOrigine(radius, ang)
{
    //Remise en place du point de référence pour le calcul du suivant
    contextAstrologie.rotate(ang);
    contextAstrologie.translate(0, radius*0.85);
    contextAstrologie.rotate(-ang);
}

function positionneHeures(heureTresFavorable)
{
    while(heureTresFavorable > 12)
    {
        heureTresFavorable-=12;
    }
    var heureTresDefavorable = heureTresFavorable+6;
    if(heureTresDefavorable > 12)
    {
        heureTresDefavorable-=12;
    }
    var heureFavorable1 = heureTresFavorable+4;
    if(heureFavorable1 > 12)
    {
        heureFavorable1-=12;
    }
    var heureFavorable2 = heureTresFavorable+8;
    if(heureFavorable2 > 12)
    {
        heureFavorable2-=12;
    }
    var heureDefavorable1 = heureTresFavorable+3;
    if(heureDefavorable1 > 12)
    {
        heureDefavorable1-=12;
    }
    var heureDefavorable2 = heureTresFavorable+9;
    if(heureDefavorable2 > 12)
    {
        heureDefavorable2-=12;
    }


    var radius = (canvasAstrologie.height / 2);
    //Cercle intérieur
    var radiusInt = radius*0.55;
    var ang;
    contextAstrologie.font = radius*0.15 + "px arial";
    contextAstrologie.textBaseline="middle";
    contextAstrologie.textAlign="center";
    contextAstrologie.fillStyle = "#000";

    ang = (heureTresFavorable-1) * Math.PI / 6;
    positionneAffichage(radiusInt, ang);
    contextAstrologie.fillText("+4", 0, 0);
    reinitialisationPointOrigine(radiusInt, ang);

    ang = (heureTresDefavorable-1) * Math.PI / 6;
    positionneAffichage(radiusInt, ang);
    contextAstrologie.fillText("-4", 0, 0);
    reinitialisationPointOrigine(radiusInt, ang);

    ang = (heureDefavorable1-1) * Math.PI / 6;
    positionneAffichage(radiusInt, ang);
    contextAstrologie.fillText("-2", 0, 0);
    reinitialisationPointOrigine(radiusInt, ang);

    ang = (heureDefavorable2-1) * Math.PI / 6;
    positionneAffichage(radiusInt, ang);
    contextAstrologie.fillText("-2", 0, 0);
    reinitialisationPointOrigine(radiusInt, ang);

    ang = (heureFavorable1-1) * Math.PI / 6;
    positionneAffichage(radiusInt, ang);
    contextAstrologie.fillText("+2", 0, 0);
    reinitialisationPointOrigine(radiusInt, ang);

    ang = (heureFavorable2-1) * Math.PI / 6;
    positionneAffichage(radiusInt, ang);
    contextAstrologie.fillText("+2", 0, 0);
    reinitialisationPointOrigine(radiusInt, ang);
}

/**
 * @desc Sert à mélanger les entrées dans un tableau
 *
 * @param {Array} array
 * @returns {Array}
 */
function shuffle(array){
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter--) {
        // Pick a random index
        index = parseInt((Math.random() * counter));
        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

/**
 * Sert pour les accords dans les textes
 * @param nombre
 */
function accordPluriel(nombre)
{
    if(nombre > 1)
    {
        return "s";
    }
    else
    {
        return "";
    }
}

/**
 * Construction des TMR en mémoire
 */
function defineTMR()
{
    if(hexagones.length === 0)
    {
        var cptId = 0;
        for(var col = 0; col<COLONNES; col++)
        {
            var lignes = LIGNES;
            if(col%2 === 1)
            {
                lignes--;
            }
            for(var ligne = 0; ligne < lignes; ligne++)
            {
                var hexa = new $oHexagone(cptId, col, ligne, typeCases[cptId], nomCases[cptId]);
                hexagones.push(hexa);
                cptId++;
            }
        }
    }
}

/**
 * Récupérer les cases de TMR du type type
 */
function getListeCasesType(type)
{
    var listeIdCases = [];
    for(var key in hexagones)
    {
        if (hexagones.hasOwnProperty(key))
        {
            if(hexagones[key].oH_type === type)
            {
                listeIdCases.push(key);
            }
        }
    }
    return listeIdCases;
}

/**
 * Dessine la canvas
 */
function dessineTMR(){
    for(var key in hexagones)
    {
        if (hexagones.hasOwnProperty(key))
        {
            hexagones[key].oH_dessine();
        }
    }
}

function positionneJoueur()
{
    //récuperer les draw X et draw Y de sa coordonnée actuelle
    var drawCoord = hexagonGrid.getCanvasCoordonneeBasGaucheTile(positionJoueur.x, positionJoueur.y);
    contextTMR.drawImage(pionJoueur, drawCoord.drawx+15, drawCoord.drawy);

}

function majPlateauTMR()
{
    dessineTMR();
    if(enTMR)
    {
        if(!perdu)
        {
            positionneJoueur();
        }
    }
    else
    {
        canvasTMR.addEventListener('click', clickTMR);
    }

}

/**
 * Vérifie qu'on est toujours sur les TMR
 * @param tile
 * @returns {boolean}
 */
function estDansTMR(tile)
{
    var estCaseTMR = tile.col >= 0 && tile.col < COLONNES && tile.row >= 0 && tile.row < LIGNES;
    if( estCaseTMR && tile.row === LIGNES-1 && tile.col%2 ===1)
    {
        estCaseTMR = false;
    }
    return estCaseTMR;
}

function clickCanvasTMR(e)
{
    var tile = hexagonGrid.getCoordonnesTileFromCanvasXY(e.pageX, e.pageY);
    //On vérifie qu'on est toujours sur les TMR
    tile.dansTMR = estDansTMR(tile);
    return tile;
}

function clickCanvasPerdu(e)
{
    return perduGrid.getCoordonnesTileFromCanvasXY(e.pageX, e.pageY, true);
}

function clickCanvasMaitrise(e)
{
    var tile = maitriseGrid.getCoordonnesTileFromCanvasXY(e.pageX, e.pageY, true);
    //On vérifie qu'on est toujours sur les TMR
    if(estDansTMR(tile))
    {
        var idHexaClique = getHexagoneIdParCoordonnees(tile.col, tile.row);
        if($.inArray(idHexaClique, listeCasesAtteignablesTMR) > -1)
        {
            return tile;
        }
    }
    return false;
}

function clickDeplaceJoueur(e)
{
    var tile = clickCanvasTMR(e);
    var caseTMR;
    if(tile)
    {
        //Vérification si c'est une case voisine de la case du joueur OU la case du joueur
        //1 récupération de l'id de la case :
        var idHexaClique = getHexagoneIdParCoordonnees(tile.col, tile.row);
        //Hexagone du joueur
        var idHexaJoueur = getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y);
        if(hexagones[idHexaJoueur].oH_estVoisin(idHexaClique) || idHexaClique === idHexaJoueur)
        {
            //Le Joueur se déplace bien, on grise les logs précédents :
            $("#voyageEnTMR").find("li, span").each(function(){
                $(this).addClass("vieux");
            });
            if(brouillardPerturbeDeplacement)
            {
                //On tire une direction au hasard parmis les voisines du joueur : D7 -1 car va de -1 (sur place) à 5
                var direction = lanceD(1, 7, false);
                direction --;
                if(typeof direction !== "undefined")
                {
                    var idHexaArrive = hexagones[idHexaJoueur].oH_getVoisinDirection(direction);
                    if(idHexaArrive === null)
                    {
                        //Emporté en dehors de la carte, réapparait sur un hexa au hasard
                        caseTMR = caseTMRAleatoire();
                        idHexaArrive = getHexagoneIdParCoordonnees(caseTMR.x, caseTMR.y)
                    }
                    else if (idHexaClique !== idHexaArrive)
                    {
                        logVoyage("Le " + RENCONTRE_ALT_BROUILLARD + " vous joue des tours...");
                    }
                    deplaceJoueur(hexagones[idHexaArrive].oH_x, hexagones[idHexaArrive].oH_y);
                }
            }
            else
            {
                if(tile.dansTMR)
                {
                    deplaceJoueur(tile.col, tile.row);
                    return true;
                }
                else
                {
                    //Teleport au Hasard dans TMR
                    perdu = true;
                    logVoyage("Le tout pour le tout en sortant de la carte des TMR. Téléportation hasardeuse.");
                    caseTMR = caseTMRAleatoire();
                    deplaceJoueur(caseTMR.x, caseTMR.y);
                    return true;
                }
            }
        }
    }
    return false;
}

function clickTMR(e)
{
    var tile = clickCanvasTMR(e);
    if(tile.dansTMR)
    {
        positionJoueur.x = tile.col;
        positionJoueur.y = tile.row;

        $("#demireve").val(infoDemireve(tile.col, tile.row));
        //on libère le bouton "Montée en TMR"
        $("#monteTMR").removeAttr("disabled").button('refresh').on("click", monteTMR);
    }
    return false;
}

function clickMaitrise(e)
{
    var tile = clickCanvasMaitrise(e);
    if(tile)
    {
        var texteInfoDemireve = infoDemireve(tile.col, tile.row);

        switch(rencontreActive.nature)
        {
            case RENCONTRE_PASSEUR :
                positionJoueur.x = tile.col;
                positionJoueur.y = tile.row;
                $("#demireve").val(texteInfoDemireve);
                majPlateauTMR();
                logVoyage("Le " + RENCONTRE_PASSEUR + " téléporte le demi-rêve, nouvelle position : " + texteInfoDemireve);
                break;
            case RENCONTRE_MESSAGER :
                logVoyage("Le " + RENCONTRE_MESSAGER + " permet de lancer un sort depuis : " + texteInfoDemireve);
                break;
            default :
                console.log("clickMaitrise sans Rencontre Passeur ou Messager => rien à faire ici");
        }
        maitriseNouvelleCase();

        $("#popupRencontreMaitrise").popup("close");
    }
}

function clickPerdu(e)
{
    var tile = clickCanvasPerdu(e);
    if(tile)
    {
        var direction;
        switch (tile.col)
        {
            case 0 :
                switch (tile.row)
                {
                    case 0:
                        direction = 5;
                        break;
                    case 1:
                        direction = 4;
                        break;
                }
                break;
            case 1 :
                switch (tile.row)
                {
                    case 0:
                        direction = 0;
                        break;
                    case 1:
                        //Sur place
                        direction = -1;
                        break;
                    case 2:
                        direction = 3;
                        break;
                }
                break;
            case 2 :
                switch (tile.row)
                {
                    case 0:
                        direction = 1;
                        break;
                    case 1:
                        direction = 2;
                        break;
                }
                break;
        }
        var idHexaJoueur = getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y);
        if(typeof direction !== "undefined")
        {
            var idHexaArrive = hexagones[idHexaJoueur].oH_getVoisinDirection(direction);
            if(idHexaArrive === null)
            {
                //Emporté en dehors de la carte, réapparait sur un hexa au hasard
                var caseTMR = caseTMRAleatoire();
                idHexaArrive = getHexagoneIdParCoordonnees(caseTMR.x, caseTMR.y)
            }
            deplaceJoueur(hexagones[idHexaArrive].oH_x, hexagones[idHexaArrive].oH_y);
            $("#popupPerdu").popup("close");
        }
    }
    return false;
}

function monteTMR()
{
    console.log("monte TMR function");
    enTMR = true;
    roundEnTMR = 1;
    $infosVoyageEnTMR.empty();
    $("#monteTMR").val("Descendre des TMR").button('refresh').off("click").on("click", quitteTMR).closest('div').removeClass('ui-focus');
    //désactivation des jauges
    $cptEndurance.slider( "option", "disabled", true );
    //On ajuste le max du slider de fatigue 2* Endurance
    $cptFatigue.attr("max", 2*parseInt($cptEndurance.val())).slider('refresh');
    $cptFatigue.slider( "option", "disabled", true );
    $cptEtat.slider( "option", "disabled", true );
    $cptDraconic.slider( "option", "disabled", true );
    $cptReve.slider( "option", "disabled", true );
    $cptRefoulement.slider( "option", "disabled", true );
    $deplacement.slider( "option", "disabled", true );
    $rencontresAlternatives.slider( "option", "disabled", true );

    //On stocke la valeur de départ de l'Etat et de la fatigue
    etatDeDepart = parseInt($cptEtat.val());
    fatigueDeDepart = parseInt($cptFatigue.val());

    var etatDeFatigue = calculEtatSelonFatigue();
    etatDeDepart = Math.min(0, etatDeDepart + Math.abs(etatDeFatigue));

    //Vitesse de déplacement
    vitesseDeplacement = parseInt($deplacement.val());

    //Rencontres alternatives
    recontresAlternatives = parseInt($rencontresAlternatives.val()) === 1;

    canvasTMR.removeEventListener('click', clickTMR);

    majPlateauTMR();
    var coutReve = 1+ vitesseDeplacement;
    $cptReve.val(parseInt($cptReve.val()) - coutReve).slider('refresh');
    logVoyage("Montée en TMR (-" + coutReve + " Rêve).", "texte");
    $("#demireve").val(infoDemireve(positionJoueur.x, positionJoueur.y));
    arriveNouvelleCase();
}

function infoDemireve(x, y, estPerdu)
{
    if(typeof estPerdu === "undefined")
    {
        estPerdu = perdu;
    }
    if(hexagones.length === 0)
    {
        defineTMR();
    }
    var idHexaDemiReve = getHexagoneIdParCoordonnees(x, y);
    if(idHexaDemiReve === null)
    {
        return "Erreur pour x+y : " + notationX[x] + notationY[y] + ". Essayez un Autre et si ça persiste, contactez moi.";
    }

    var $hexagoneDemiReve = hexagones[idHexaDemiReve];
    var typeTerrainHexagoneDemiReve = typeTerrain[$hexagoneDemiReve.oH_type];
    if(estPerdu)
    {
        return typeTerrainHexagoneDemiReve.nom + " inconnu" + typeTerrainHexagoneDemiReve.feminin + typeTerrainHexagoneDemiReve.pluriel;
    }
    else
    {
        return notationX[x] + notationY[y] + " : " + typeTerrainHexagoneDemiReve.nom + " " + $hexagoneDemiReve.oH_nom;
    }
}

function deplaceJoueur(x, y)
{
    if(vitesseDeplacement < 1)
    {
        roundEnTMR++;
    }
    canvasTMR.removeEventListener('click', clickDeplaceJoueur);
    positionJoueur.x = x;
    positionJoueur.y = y;
    $("#demireve").val(infoDemireve(x, y));
    majPlateauTMR();
    arriveNouvelleCase();
}

function arriveNouvelleCase()
{
    logVoyage("Arrivée en " + $("#demireve").val() + " (Round " + roundEnTMR + ")", "debutCase");
    //Fatigue
    if(augmentationFatigue())
    {
        //Brouillard
        if(brouillardActif !== false){
            logVoyage("Vous êtes toujours dans le "+RENCONTRE_ALT_BROUILLARD+".");
            //test de maîtrise du Brouillard
            maitriseBrouillard();
        }

        rencontreNouvelleCase();
    }
}

function rencontreNouvelleCase()
{
    //Rencontre
    var testRencontre = lanceD(1, 7);
    var textRencontre = "Test de Rencontre d7 : " + testRencontre;
    if(testRencontre === 7)
    {
        logVoyage(textRencontre + " => Rencontre !");
        if(vitesseDeplacement > 0)
        {
            roundEnTMR++;
        }
        rencontreActive.nature = rencontreNature();
        rencontreActive.force = 0;
        switch (rencontres_forces[rencontreActive.nature])
        {
            case "7+dDraconique":
                rencontreActive.force = 7 + dDr();
                break;
            default :
                var regex = /^(\d+)d(\d+)$/i;
                var matches = rencontres_forces[rencontreActive.nature].match(regex);
                rencontreActive.force = lanceD(matches[1], matches[2]);
        }
        rencontreActive.text = "Rencontre " + rencontreActive.nature + " (force " + rencontres_forces[rencontreActive.nature] + " : " + rencontreActive.force + ").";
        //Ouvrir popin de choix : Maîtrise, se dérober, refouler
        var $popupRencontreContent = $("#popupRencontreContent");
        $popupRencontreContent.html("Arrivée en " + $("#demireve").val() +  "<br />" + rencontreActive.text);
        switch(rencontreActive.nature)
        {
            case RENCONTRE_DRAGON :
                $popupRencontreContent.prepend("<br />Attention, refouler un " + RENCONTRE_DRAGON + " coûte 2 points de refoulement.<br />");
                break;
        }
        logVoyage(rencontreActive.text);
        var difficulte = parseInt($cptDraconic.val()) + parseInt($cptEtat.val()) - rencontreActive.force;
        var chanceMaitrise = Math.min(99,getPourcentageChance(parseInt($cptReve.val()), difficulte));
        $("#chanceMaitrise").html( chanceMaitrise + "%");
        $("#popupRencontre").popup({ dismissible: false }).popup("open", 'positionTo: #plateauTMR');
    }
    else
    {
        logVoyage(textRencontre + " => rien");
        maitriseNouvelleCase();
    }
}

function maitriseNouvelleCase()
{
    //réinitialisation de la rencontreActive
    rencontreActive = {};
    var idHexaClique = getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y);
    if($.inArray(hexagones[idHexaClique].oH_type, terrainsHumides) > -1)
    {
        //Maitrise de case humide diff 7 et état
        logVoyage("Terrain Humide, test de maîtrise à difficultée 7");
        var difficulte = parseInt($cptDraconic.val()) + parseInt($cptEtat.val()) - 7;
        var chancesMaitrise = getPourcentageChance($cptReve.val(), difficulte);
        logVoyage("Test de Maîtrise : " + chancesMaitrise + "%");
        var jetMaitrise = lanceD(1, 100);
        logVoyage("Jet de Maîtrise : " + jetMaitrise);
        if(jetMaitrise <= chancesMaitrise && jetMaitrise < 100)
        {
            logVoyage("Case Humide maîtrisée.");
            var seuilPart = getReussiteParticuliereSeuil(chancesMaitrise, difficulte);
            if(jetMaitrise <= seuilPart && difficulte < 0)
            {
                logVoyage("Réussite particulière ("+jetMaitrise +" < ou égal à " + seuilPart + "): gain de " + Math.abs(difficulte) + " point" + accordPluriel(Math.abs(difficulte)) +" d'expérience à répartir en Voie Draconique et Rêve.");
            }
            suiteVoyage();
        }
        else
        {
            logVoyage("Maîtrise de la case Humide ratée. ");
            //Conséquences non Maitrises : ET : Souffle de Dragon
            //Sortie TMR
            var seuilET = getEchecTotalSeuil(chancesMaitrise, difficulte);
            if(jetMaitrise >= seuilET)
            {
                logVoyage("Echec Total ("+chancesMaitrise +" > ou égal à " + seuilET + ")... Souffle de Dragon !");
                souffleDragon();
            }
            quitteTMR();
        }
    }
    else
    {
        suiteVoyage();
    }
}

function suiteVoyage()
{
    if(perdu)
    {
        var idHexaDemiReve = getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y);
        var $hexagoneDemiReve = hexagones[idHexaDemiReve];
        var typeTerrainHexagoneDemiReve = typeTerrain[$hexagoneDemiReve.oH_type];
        perduGrid.drawHexAtColRow(1,1,$hexagoneDemiReve.oH_couleur(), true);
        perduGrid.drawContentHexAtColRow(1,1,"", $hexagoneDemiReve.oH_type, typeTerrainHexagoneDemiReve.nom, "Inconnu" + typeTerrainHexagoneDemiReve.feminin + typeTerrainHexagoneDemiReve.pluriel, imagesCases[$hexagoneDemiReve.oH_type], true);

        canvasPerdu.addEventListener('click', clickPerdu);
        affichagePopupPerdu = true;
        $("#popupPerduContent").html("Perdu dans les TMRs... Vers où allez vous ?");
        $("#perduDescendreTMR").val("Descendre des TMR").button('refresh').off("click").on("click", quitteTMR);
        $("#popupPerdu").popup({ dismissible: false }).popup("open", 'positionTo: #plateauTMR');
    }
    else
    {
        //On remet l'écouteur pour bouger
        canvasTMR.addEventListener('click', clickDeplaceJoueur);
    }
}

function calculEtatSelonFatigue()
{
    var fatigue = parseInt($cptFatigue.val()) + 1;
    //Comparaison Fatigue à Seuil, info dispo Endurance
    var endurance = parseInt($cptEndurance.val());
    //Etat0
    var etat = 0;
    var seuilChangementEtat = Math.floor(endurance/2);
    var variationSeuilChangementEtat = endurance/6;
    if(fatigue > Math.floor(endurance/2))
    {
        //Etat -1
        etat--;
        seuilChangementEtat = endurance;
        if( fatigue > seuilChangementEtat)
        {
            //Etat -2
            etat--;
            seuilChangementEtat += Math.floor(variationSeuilChangementEtat);
            if( fatigue > seuilChangementEtat)
            {
                //Etat -3
                etat--;
                //Cas particulier : En fait les arrondis de .5 se font à l'inférieur; tandis que Math.round les arrondis au supp
                //Le %3 = à 0 correspond au /6 => en .5 ou en .0
                if(variationSeuilChangementEtat%3 === 0)
                {
                    seuilChangementEtat += Math.floor(variationSeuilChangementEtat);
                }
                else
                {
                    seuilChangementEtat += Math.round(variationSeuilChangementEtat);
                }
                if( fatigue > seuilChangementEtat)
                {
                    //Etat -4
                    etat--;
                    //Ici le seuil doit être 1.5*endurance arrondis à l'inf
                    seuilChangementEtat = Math.floor(endurance*1.5);
                    if(fatigue > seuilChangementEtat)
                    {
                        //Etat -5
                        etat--;
                        seuilChangementEtat += Math.floor(variationSeuilChangementEtat);
                        //Cas particulier pour les end 17, 23 et 29 +1
                        if($.inArray(endurance, [17, 23, 29]) !== -1)
                        {
                            seuilChangementEtat++;
                        }
                        if(fatigue > seuilChangementEtat)
                        {
                            //Etat -6
                            etat--;
                            seuilChangementEtat += Math.round(variationSeuilChangementEtat);
                            if(fatigue > seuilChangementEtat)
                            {
                                //Etat -7
                                etat--;
                            }
                        }
                    }
                }
            }
        }
    }
    return etat;
}

function augmentationFatigue()
{
    logVoyage("Fatigue +1.");
    var fatigue = parseInt($cptFatigue.val()) + 1;
    $cptFatigue.val(fatigue).slider('refresh');
    //Comparaison Fatigue à Seuil, info dispo Endurance
    var endurance = parseInt($cptEndurance.val());
    var etat = calculEtatSelonFatigue();
    var nouvelleValeurEtat = etatDeDepart+etat;
    if(nouvelleValeurEtat !== parseInt($cptEtat.val()))
    {
        $cptEtat.val(nouvelleValeurEtat).slider('refresh');
        logVoyage("La fatigue s'accumule...");
    }
    if(fatigue > 2*endurance)
    {
        //Plus d'énergie, tombe dans les pommes
        logVoyage("Plus d'énergie... Montée dans les Hautes Terres du Rêve... Attention au Rêve de Dragon...", "texte");
        quitteTMR();
        return false;
    }
    else
    {
        return true;
    }
}

function ajustementReve(nombre, direction)
{
    if(typeof direction === "undefined")
    {
        direction = "Perte";
    }
    if(typeof nombre === "undefined")
    {
        nombre = 1;
    }
    var reve = parseInt($cptReve.val());
    if(direction === "Perte")
    {
        reve-=nombre;
    }
    else
    {
        reve+=nombre;
    }
    $cptReve.val(reve).slider('refresh');
    logVoyage(direction + " de " + nombre + " point" + accordPluriel(nombre) + " de Rêve");
    if(reve < 1)
    {
        //Plus de points de rêve, Hautes Terres du Rêve
        logVoyage("Plus de points de rêve... Montée dans les Hautes Terres du Rêve... Attention au Rêve de Dragon...", "texte");
        quitteTMR();
        return false;
    }
    return true;
}

function refoulement(coutRefoulement, typeInfo)
{
    if(typeof coutRefoulement === "undefined")
    {
        coutRefoulement = 1;
    }
    if(typeof typeInfo === "undefined"){
        typeInfo = "ligne";
    }

    var refoulement = parseInt($cptRefoulement.val()) +coutRefoulement;

    $cptRefoulement.val(refoulement).slider('refresh');
    //Test de Refoulement
    var testRefoulement = lanceD(1, 20);
    logVoyage("Test de refoulement (1d20 > Refoulement " +  refoulement + ") : " + testRefoulement, typeInfo);
    if(testRefoulement > refoulement)
    {
        return true;
    }
    else
    {
        logVoyage("Le mental craque... Souffle de Dragon !", typeInfo);
        $cptRefoulement.val(0).slider('refresh');
        //Souffle de Dragon
        souffleDragon();
        return false;
    }
}

function rencontreNature()
{
    var jetRencontre;
    //en fonction du lieu
    var idHexaJoueur = getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y);
    var type = hexagones[idHexaJoueur].oH_type;

    //Si un chat des Rêves accompagne le Haut-Rêvant, on relance la nature de la Rencontre jsuqu'à avoir une "Bonne Rencontre"
    jetRencontre = lanceD(1, 100);
    if(compagnonChatDesReves)
    {
        if(rencontresBonnes[type] > 0)
        {
            //Action du Chat uniquement sur la prochaine Rencontre Mauvaise
            if(jetRencontre > rencontresBonnes[type])
            {
                while(jetRencontre > rencontresBonnes[type])
                {
                    jetRencontre = lanceD(1, 100);
                }
                logVoyage("Le " + RENCONTRE_ALT_CHAT + " vous a donné un coup de patte et s'en va en roronnant.");
                compagnonChatDesReves = false;
            }
        }
        else
        {
            logVoyage("Le " + RENCONTRE_ALT_CHAT + " ne sait vous aider sur une " + typeTerrain[type].nom + ".");
        }
    }
    logVoyage("Jet 1d100 sur " + typeTerrain[type].nom + " : " + jetRencontre);

    for(key in rencontres[type])
    {
        if (rencontres[type].hasOwnProperty(key))
        {
            if(jetRencontre<= key)
            {
                var typeRencontre = rencontres[type][key];
                //Si les rencontres Alternatives sont activées, il faut tester 50%, si < on donne la version alternative:
                if(recontresAlternatives)
                {
                    var jetRencontreAlternative = lanceD(1, 100);
                    if(jetRencontreAlternative < 51)
                    {
                        typeRencontre = recontres_correspondance_alternatives[typeRencontre];
                    }
                }
                return typeRencontre;
            }
        }
    }
    return null;
}

function maitriseBrouillard()
{
    var difficulte = parseInt($cptDraconic.val()) + parseInt($cptEtat.val())-brouillardActif;
    var chancesMaitrise = getPourcentageChance(parseInt($cptReve.val()), difficulte);
    logVoyage("Test de maîtrise (Pts Rêve " + $cptReve.val() + "/ Draconique " + $cptDraconic.val() + " &Eacute;tat " + $cptEtat.val() + " Diff -" + brouillardActif + ") : " + Math.min(99,chancesMaitrise) + "%");
    var jetMaitrise = lanceD(1, 100);
    logVoyage("Jet de maîtrise  : " + jetMaitrise);
    if(jetMaitrise <= chancesMaitrise && jetMaitrise <100)
    {
        logVoyage(RENCONTRE_ALT_BROUILLARD + " maîtrisé");
        var seuilPart = getReussiteParticuliereSeuil(chancesMaitrise, difficulte);
        var particuliere = false;
        if(jetMaitrise <= seuilPart && difficulte < 0)
        {
            logVoyage("Réussite particulière ("+chancesMaitrise +" < ou égal à " + seuilPart + ")");
            particuliere = true;
        }
        brouillardPerturbeDeplacement = false;
        if(particuliere)
        {
            //Fin du Brouillard
            brouillardActif = false;
            logVoyage("Vous sortez du " + RENCONTRE_ALT_BROUILLARD + ".");
        }
        else
        {
            logVoyage("Mais le " + RENCONTRE_ALT_BROUILLARD + " vous entoure toujours...");
        }
    }
    else
    {
        logVoyage("Maitrise raté : " + RENCONTRE_ALT_BROUILLARD);
        brouillardPerturbeDeplacement = true;
        logVoyage("Le " + RENCONTRE_ALT_BROUILLARD + " vous perturbe, vous n'arriverez pas forcément où vous le souhaitez...");
    }
}

function actionRencontre(action)
{
    switch(action)
    {
        case "maitriser":
            var difficulte = parseInt($cptDraconic.val()) + parseInt($cptEtat.val())-rencontreActive.force;
            var chancesMaitrise = getPourcentageChance(parseInt($cptReve.val()), difficulte);
            logVoyage("Test de maîtrise (Pts Rêve " + $cptReve.val() + "/ Draconique " + $cptDraconic.val() + " &Eacute;tat " + $cptEtat.val() + " Diff -" + rencontreActive.force + ") : " + Math.min(99,chancesMaitrise) + "%");
            var jetMaitrise = lanceD(1, 100);
            logVoyage("Jet de maîtrise  : " + jetMaitrise);
            //Cas particulier, jet de Stress
            if(rencontreActive.nature === RENCONTRE_ALT_FANTOME)
            {
                var infosStress = testStress(rencontreActive.force, chancesMaitrise, jetMaitrise, difficulte);
                var px = infosStress.px;
                //le personnage voit venir vers lui une silhouette qui lui ressemble étrangement. Au fur et à mesure qu'elle approche, les doutes se dissipent: c'est bien lui, mais dans une autre existence. De fait, les fantômes sont des expressions de l'Archétype du personnage et les combattre équivaut à peu près à un rêve-souvenir. Ils peuvent apparaître dans les TMR, attirés qu'ils sont par la présence du magicien. Bien sûr, ces rêves sont plutôt rares et extrêmement fugaces, car, d'habitude, ils n'apparaissent que dans les Basses Terres. En termes techniques, déterminez la force du fantôme et résolvez le combat normalement, mais ce jet de dé se comporte comme un jet de stress, avec les points de rêve du fantôme comme points de stress. Exemple: un personnage rencontre un fantôme à 4 points de rêve. Il n'arrive pas à le battre (échec normal), mais reçoit quand même 20% des points de rêve du fantôme en points d'expérience (soit 1 point).
                var textFantome = "Vous voyez venir vers vous une silhouette qui vous ressemble étrangement. Au fur et à mesure qu'elle approche, les doutes se dissipent: c'est bien vous, mais dans une autre existence.<br />Vous rencontrez un " + RENCONTRE_ALT_FANTOME;
                if(px > 0)
                {
                    textFantome += " et gagnez " + px + " point" + accordPluriel(px) +" d'expérience à mettre dans des Compétences encore inférieures à celles de l'Archétype.";
                }
                else
                {
                    textFantome += " mais vous n'arrivez pas à en tirer d'enseignement..."
                }
                logVoyage(textFantome);
                maitriseNouvelleCase();
                break;
            }
            else if(jetMaitrise <= chancesMaitrise && jetMaitrise < 100)
            {
                logVoyage(rencontreActive.nature + " maîtrisé");
                var seuilPart = getReussiteParticuliereSeuil(chancesMaitrise, difficulte);
                var particuliere = false;
                var seuilSign = getReussiteSignificativeSeuil(chancesMaitrise, difficulte);
                var significative = false;
                if(jetMaitrise <= seuilPart)
                {
                    logVoyage("Réussite particulière ("+jetMaitrise +" < ou égal à " + seuilPart + ")");
                    if(rencontreActive.nature === RENCONTRE_DRAGON && difficulte < 0)
                    {
                        logVoyage("Gain de " + Math.abs(difficulte) + " point" + accordPluriel(Math.abs(difficulte)) +" d'expérience à répartir en Voie Draconique et Rêve");
                    }
                    particuliere = true;
                }
                else if(jetMaitrise <= seuilSign)
                {
                    significative = true;
                }

                if(rencontreMaitrisee(particuliere, significative))
                {
                    maitriseNouvelleCase();
                }

            }
            else
            {
                logVoyage("Maitrise raté : " + rencontreActive.nature);
                var seuilET = getEchecTotalSeuil(chancesMaitrise, difficulte);
                var echecTotal= false;
                var seuilEPart = getEchecParticulierSeuil(chancesMaitrise, difficulte);
                var echecParticulier= false;
                if(jetMaitrise >= seuilET)
                {
                    logVoyage("Echec Total ("+jetMaitrise +" > ou égal à " + seuilET + ")...");
                    echecTotal= true;
                }
                else if(jetMaitrise >= seuilEPart)
                {
                    echecParticulier = true;
                }
                if(rencontreNonMaitrisee(echecTotal, echecParticulier))
                {
                    maitriseNouvelleCase();
                }
            }
            break;
        case "refouler":
            //+1 Refoulement
            var coutRefoulement = 1;
            if(rencontreActive.nature === RENCONTRE_DRAGON)
            {
                coutRefoulement++;
            }
            if(refoulement(coutRefoulement))
            {
                //ça passe, on continue le périple
                logVoyage("La rencontre est refoulée avec succès. Le voyage continue.");
            }
            maitriseNouvelleCase();
            break;
        default:
            //Correspond aussi à Se Dérober => Sort des TMR
            logVoyage("Sortie des TMR en round "+roundEnTMR, "texte");
            logVoyage("La Rencontre restera jusqu'à la fin de la même heure le lendemain et il est impossible de se dérober une seconde fois.", "texte");
            quitteTMR();
    }
}

function rencontreMaitrisee(particuliere)
{
    if(typeof particuliere === "undefined")
    {
        particuliere = false;
    }

    var $popupRencontreMaitriseContent = $("#popupRencontreMaitriseContent");
    var $popupRencontreMaitrise = $("#popupRencontreMaitrise");
    var $canvasMaitrise = $("#MaitriseCanvas");

    switch(rencontreActive.nature)
    {
        case RENCONTRE_MESSAGER:
            //Lancement de sort possible dans une case à distance de rencontreActive.force cases maxi
            //le demi rêve ne bouge pas
            //Si perdu, on a assez d'info pour se retrouver
            //Pas besoin de Maîtriser une Case Humide de la case distante (faut quand même la case humide du demi-rêve)
            //Même popup que Passeur
        case RENCONTRE_PASSEUR :
            //Téléporte le demi rêve sur une case à distance de rencontreActive.force cases maxi
            //Arrivée sur nouvelle case sans dépense de fatigue, ni de jet de Rencontre
            //Case Humide à maitriser
            //Si perdu, on a assez d'info pour se retrouver
            perdu = false;
            //On traite ça dans réponse à popup
            var listeCasesAtteignables = offset_hexaAPortee(OffsetCoord(positionJoueur.x, positionJoueur.y), rencontreActive.force);
            //Trouver le col min et le row min pour les "coller" à gauche et à droite du canvas...
            listeCasesAtteignablesTMR = [];
            var colMin = COLONNES;
            var rowMin = LIGNES;
            var colMax = 0;
            var rowMax = 0;
            for(i = 0; i < listeCasesAtteignables.length; i++)
            {
                var tile = listeCasesAtteignables[i];
                var idTile = getHexagoneIdParCoordonnees(tile.col, tile.row);
                if(idTile !== null)
                {
                    colMin = Math.min(tile.col, colMin);
                    rowMin = Math.min(tile.row, rowMin);
                    colMax = Math.max(tile.col, colMax);
                    rowMax = Math.max(tile.row, rowMax);
                    listeCasesAtteignablesTMR.push(idTile);
                }
            }
            var nbCasesLargeur = colMax-colMin+1;
            var nbCasesHauteur = rowMax-rowMin+1;
            var margeLeft = 25 - colMin*BASE_RADIUS_HEXAGONE;
            var margeTop = 25 - rowMin*BASE_RADIUS_HEXAGONE;
            $canvasMaitrise.attr({width:(nbCasesLargeur+1)*BASE_RADIUS_HEXAGONE,height:(nbCasesHauteur+1)*BASE_RADIUS_HEXAGONE}).show();
            maitriseGrid = new HexagonGrid("MaitriseCanvas", BASE_RADIUS_HEXAGONE);
            maitriseGrid.canvasOriginX = margeLeft;
            maitriseGrid.canvasOriginY = margeTop;
            for(i = 0; i < listeCasesAtteignablesTMR.length; i++)
            {
                idHexagone = listeCasesAtteignablesTMR[i];
                var hexagone = hexagones[idHexagone];

                maitriseGrid.drawHexAtColRow(hexagone.oH_x, hexagone.oH_y, hexagone.oH_couleur());
                maitriseGrid.drawContentHexAtColRow(hexagone.oH_x, hexagone.oH_y,notationX[hexagone.oH_x]+notationY[hexagone.oH_y], hexagone.oH_type, typeTerrain[hexagone.oH_type].nom, hexagone.oH_nom, imagesCases[hexagone.oH_type]);
            }
            canvasMaitrise.addEventListener('click', clickMaitrise);

            $popupRencontreMaitriseContent.html(rencontreActive.nature + " force " + rencontreActive.force + " maîtrisé.<br />");
            if(rencontreActive.nature === RENCONTRE_PASSEUR)
            {
                $popupRencontreMaitriseContent.append('Choisir la destination.');
            }
            else
            {
                $popupRencontreMaitriseContent.append("Choisir d'où lancer le sort.");
            }
            $popupRencontreMaitrise.popup({ dismissible: false }).popup("open", 'positionTo: #plateauTMR');
            return false;
            break;
        case RENCONTRE_FLEUR :
        case RENCONTRE_ALT_FLEUR :
            //+ rencontreActive.force points de Rêve
            ajustementReve(rencontreActive.force, "Gain");
            break;
        case RENCONTRE_CHANGEUR:
            //Téléporte sur une case de même genre connue, sans limitation de distance
            perdu = false;
            var listeCasesType = getListeCasesType(hexagones[getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y)].oH_type);
            //Arrivée sur nouvelle case sans dépense de fatigue, ni de jet de Rencontre
            //Case Humide à maitriser
            //On traite ça dans réponse à popup
            var contentMaitriseChangeur = "<div class='ui-field-contain'>";
            contentMaitriseChangeur += "<fieldset data-role='controlgroup' data-iconpos='none' class='listeCases'>";
            contentMaitriseChangeur += "<legend>Choisissez votre destination</legend>";
            contentMaitriseChangeur += "<div class='ui-body ui-corner-all ui-shadow'>";
            contentMaitriseChangeur += "<div class='ui-grid-c grid'>";
            var idHexagone;
            var nbParLigne = 4;
            var positionDansLigne=0;
            for(var i = 0; i < listeCasesType.length; i++)
            {
                positionDansLigne++;
                if(positionDansLigne > 4)
                {
                    positionDansLigne = 1;
                }
                if(positionDansLigne + (listeCasesType.length - i) <= 4 && nbParLigne === 4)
                {
                    contentMaitriseChangeur += "</div>";
                    var grid;
                    nbParLigne = listeCasesType.length - i;
                    switch(nbParLigne)
                    {
                        case 1:
                            grid = "solo";
                            break;
                        case 2:
                            grid = "a";
                            break;
                        default:
                            grid = "b";
                            break;
                    }
                    contentMaitriseChangeur += "<div class='ui-grid-" + grid + " grid'>";
                }
                idHexagone = listeCasesType[i];
                var block;
                switch(i%4)
                {
                    case 0:
                        block = "a";
                        break;
                    case 1:
                        block = "b";
                        break;
                    case 2:
                        block = "c";
                        break;
                    default:
                        block = "d";
                        break;
                }
                contentMaitriseChangeur += "<div class='ui-block-" + block + "'>";

                contentMaitriseChangeur += "<input name='choix-destination-changeur' id='choix-destination-changeur-" + idHexagone + "' value='" + idHexagone + "' type='radio' data-mini='true'>";
                contentMaitriseChangeur += "<label for='choix-destination-changeur-" + idHexagone + "'>" + infoDemireve(hexagones[idHexagone].oH_x, hexagones[idHexagone].oH_y) + "</label>";
                contentMaitriseChangeur += "</div>";

            }
            contentMaitriseChangeur += "</div></div>";
            contentMaitriseChangeur += "</fieldset></div>";
            $canvasMaitrise.hide();

            $popupRencontreMaitriseContent.html(contentMaitriseChangeur);
            $popupRencontreMaitrise.popup({ dismissible: false }).popup("open", 'positionTo: #plateauTMR');
            $popupRencontreMaitriseContent.trigger('create');
            $("input[name='choix-destination-changeur']", "#popupRencontreMaitriseContent").each(function(){
                $(this).on("click", choixDestination);
            });
            return false;
            break;
        case RENCONTRE_DRAGON  :
            //+ rencontreActive.force points de Rêve
            ajustementReve(rencontreActive.force, "Gain");
            //SI Réussite Particulière :
            // -> Tête de Dragon
            if(particuliere)
            {
                logVoyage("Expérience brillamment assumée ! Tête de Dragon !");
                teteDragon();
            }
            break;
        case RENCONTRE_ALT_REJETON :
            // apparaît comme un enfant (déterminez le sexe au hasard), frêle et beau. Il demandera au magicien s'il peut le suivre. Le haut-rêvant doit alors l'affronter comme n'importe quelle autre rencontre. S'il réussit, le rejeton le suit et lui donne un bonus de +2 à son prochain sort. Les rejetons d'Oniros sont des manifestations du rêve qui apparaissent des fois dans les TMR. Certains sages ont émis l'hypothèse que ce seraient des sorts mis en réserve, puis oubliés, qui auraient fini par "éclore".
            logVoyage("Le Rejeton d'Oniros vous suit. Vous aurez un bonus de +2 au prochain lancer de sort");
            break;
        case RENCONTRE_ALT_CHAT :
            //apparaît comme un chat, de couleur quelconque. Le chat vient se frotter aux jambes du haut-rêvant en ronronnant. Le magicien doit le combattre. Si c'est réussi, le chat le suit et transformera automatiquement la prochaine mauvaise rencontre en bonne rencontre (relancez les dés jusqu'à obtenir une bonne rencontre). Si c'est raté, le chat s'en va, la queue fièrement dressée en signe de dédain. Un sage a dit une fois, que les chats des Rêves se matérialiseraient quand un magicien fait preuve de beaucoup de chance dans les TMR (une réussite critique, quoi).
            compagnonChatDesReves = true;
            logVoyage("Le " + rencontreActive.nature + " décide de vous accompagner et vous portera chance pour la prochaine Rencontre.");
            break;
        case RENCONTRE_ALT_FAILLE :
            logVoyage(rencontreActive.nature + " se referme...");
            break;
        case RENCONTRE_ALT_BROUILLARD :
            //la case où se trouve le magicien est soudainement remplie de brouillard et il ne voit plus où il va. Il doit combattre le brouillard. S'il réussit, il se déplace normalement lors de son prochain mouvement, mais, faute d'une critique ou d'une particulière, il y aura aussi du brouillard dans sa case d'arrivée et il faut recommencer (sinon le brouillard se dissipe). En cas d'échec, le mouvement du haut-rêvant est aléatoire, il y a du brouillard dans sa case d'arrivée et, s'il veut lancer un sort, il subit un malus de -2. Une hypothèse veut que les brouillards soient créés par des tourbillons passant au-dessus du Fleuve (d'autres penchent pour les Déserts, d'autres encore disent que ce sont des tourbillons avortés).
            brouillardPerturbeDeplacement = false;
            if(particuliere)
            {
                //Fin du Brouillard
                brouillardActif = false;
                logVoyage("Vous sortez du " + rencontreActive.nature + ".");
            }
            else
            {
                logVoyage("Mais le " + rencontreActive.nature + " vous entoure toujours...");
            }
            break;
        default :
            //Il ne se passe rien
            logVoyage(rencontreActive.nature + " disparait");
    }
    return true;
}

function choixDestination()
{
    $("#popupRencontreMaitrise").popup("close");
    var idNouvelleCase = $(this).val();
    //récupération des nouvelles coordonnées
    positionJoueur.x = hexagones[idNouvelleCase].oH_x;
    positionJoueur.y = hexagones[idNouvelleCase].oH_y;
    var informationDemireve = infoDemireve(positionJoueur.x, positionJoueur.y);
    $("#demireve").val(informationDemireve);
    logVoyage("Demi-rêve en " + informationDemireve);
    majPlateauTMR();
    maitriseNouvelleCase();
}

function rencontreNonMaitrisee(echecTotal)
{
    if(typeof echecTotal === "undefined")
    {
        echecTotal = false;
    }
    var cptRoundNonMaitrise = 0;
    var quitteReve = false;
    var difficulte, chancesMaitrise, jetMaitrise;
    var cout = 0;
    var $demiReve = $("#demireve");

    var direction,  idHexaJoueur, idHexaArrive, caseTMR;
    switch(rencontreActive.nature)
    {
        case RENCONTRE_MANGEUR :
        case RENCONTRE_ALT_FLEUR :
            //- rencontreActive.force points de Rêve
            ajustementReve(rencontreActive.force);
            return true;
            break;
        case RENCONTRE_CHANGEUR:
            //Téléporte sur une case de même genre aléatoirement, sans limitation de distance
            var listeCasesType = shuffle(getListeCasesType(hexagones[getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y)].oH_type));
            var idNouvelleCase = listeCasesType[0];
            //récupération des nouvelles coordonnées
            positionJoueur.x = hexagones[idNouvelleCase].oH_x;
            positionJoueur.y = hexagones[idNouvelleCase].oH_y;
            //Ne plus donner info Coordonnée et Nom, ne plus afficher Demi-Rêve
            perdu = true;
            //Arrivée sur nouvelle case sans dépense de fatigue, ni de jet de Rencontre
            var $hexagoneDemiReve = hexagones[getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y)];
            var typeTerrainHexagoneDemiReve = typeTerrain[$hexagoneDemiReve.oH_type];
            var texte = "Perdu dans les TMRs... " + typeTerrainHexagoneDemiReve.nom + " non identifié" + typeTerrainHexagoneDemiReve.feminin + typeTerrainHexagoneDemiReve.pluriel;
            logVoyage(texte);
            //Case Humide à maitriser
            return true;
            break;
        case RENCONTRE_BRISEUR :
            //Fait quitter les TMR
            logVoyage("Le " + rencontreActive.nature + " rompt la concentration...");
            quitteTMR();
            return false;
            break;
        case RENCONTRE_REFLET  :
            //Bloque Demi Rêve sur case sans rien lui laisser faire d'autre
            //Round +1, fatigue +1
            //Refoulement et Dérobade impossible
            //Doit retenter de Maîtriser sinon... on continue
            do{
                logVoyage("Bloqué dans le Reflet...");
                roundEnTMR++;
                if(!augmentationFatigue())
                {
                    quitteReve = true;
                }
                if(!quitteReve)
                {
                    difficulte = parseInt($cptDraconic.val()) + parseInt($cptEtat.val())-rencontreActive.force;
                    chancesMaitrise = getPourcentageChance(parseInt($cptReve.val()), difficulte);
                    logVoyage("Test de maîtrise (Pts Rêve " + $cptReve.val() + "/ Draconique " + $cptDraconic.val() + " &Eacute;tat " + $cptEtat.val() + " diff -" + rencontreActive.force + ") : " + Math.min(99,chancesMaitrise) + "%");
                    jetMaitrise = lanceD(1, 100);
                    logVoyage("Jet de maîtrise  : " + jetMaitrise);
                }
            }while((jetMaitrise > chancesMaitrise || jetMaitrise ===100 ) && !quitteReve);
            //Si fatigue = 0 : 1 Refoulement en plus du Quitte TMR
            if(quitteReve)
            {
                refoulement(1, "texte");
                return false;
            }
            logVoyage("Vous échappez enfin au " + RENCONTRE_REFLET + "...");
            return true;
            break;
        case RENCONTRE_T_NOIR  :
            cout = 2;
            //Pas de Break, les 2 tourbillons fonctionnent pareil à part le cout en reve et en nombre de case dérivées
        case RENCONTRE_T_BLANC :
            //Si le cout n'a pas été défini dans RENCONTRE_T_NOIR c'est qu'on entre par RENCONTRE_T_BLANC
            if(cout === 0)
            {
                cout = 1;
            }
            //Bloque Demi Rêve sur case sans rien lui laisser faire d'autre
            //Round +1, fatigue +1, Rêve -cout !
            //Refoulement et Dérobade impossible
            //Doit retenter de Maîtriser sinon... on continue
            //dérive dans une direction aléatoire (D6 : N, NE, SE, S, SO, NO)
            direction = lanceD(1, 6, false);
            //Ne plus donner info Coordonnée et Nom, ne plus afficher Demi-Rêve
            perdu = true;
            do{
                logVoyage("Bloqué dans le Tourbillon...");
                roundEnTMR++;
                cptRoundNonMaitrise++;

                idHexaJoueur = getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y);
                idHexaArrive = hexagones[idHexaJoueur].oH_getVoisinDirection(direction);
                if(idHexaArrive === null)
                {
                    //Emporté en dehors de la carte, réapparait sur un hexa au hasard
                    caseTMR = caseTMRAleatoire();
                    idHexaArrive = getHexagoneIdParCoordonnees(caseTMR.x, caseTMR.y);
                }
                positionJoueur.x = hexagones[idHexaArrive].oH_x;
                positionJoueur.y = hexagones[idHexaArrive].oH_y;

                if(!augmentationFatigue())
                {
                    quitteReve = true;
                }
                if(!ajustementReve(cout))
                {
                    quitteReve = true;
                }

                if(!quitteReve)
                {
                    difficulte = parseInt($cptDraconic.val()) + parseInt($cptEtat.val())-rencontreActive.force;
                    chancesMaitrise = getPourcentageChance(parseInt($cptReve.val()), difficulte);
                    logVoyage("Test de maîtrise (Pts Rêve " + $cptReve.val() + "/ Draconique " + $cptDraconic.val() + " &Eacute;tat " + $cptEtat.val() + " diff -" + rencontreActive.force + ") : " + Math.min(99,chancesMaitrise) + "%");
                    jetMaitrise = lanceD(1, 100);
                    logVoyage("Jet de maîtrise  : " + jetMaitrise);
                }
            }while((jetMaitrise > chancesMaitrise || jetMaitrise ===100 ) && !quitteReve);
            logVoyage(rencontreActive.nature + " disparait, ... Il y a eu dérive dans les TMR pendant " + cptRoundNonMaitrise + " round" + accordPluriel(cptRoundNonMaitrise) + "...");
            $demiReve.val(infoDemireve(positionJoueur.x, positionJoueur.y));
            //Si fatigue ou pts Rêve = 0 : 1 Refoulement en plus du Quitte TMR
            if(quitteReve)
            {
                refoulement(1, "texte");
                return false;
            }
            majPlateauTMR();
            return true;
            break;
        case RENCONTRE_DRAGON  :
            //Queue de Dragon
            logVoyage("Santé mentale perturbée, Queue de Dragon...");
            queueDragon();
            //Si Echec Total de la Maîtrise => une 2ème Queue de Dragon
            if(echecTotal)
            {
                logVoyage("Et avec cet échec total, deuxième Queue de Dragon !");
                queueDragon();
            }
            return true;
            break;
        case RENCONTRE_ALT_CHAT :
            logVoyage("Le " + rencontreActive.nature + " s'en va, la queue fièrement dressée en signe de dédain.");
            return true;
            break;
        case RENCONTRE_ALT_CRUE :
            // pourquoi le Fleuve ne pourrait-il pas avoir de crue, hein? La case où le magicien se trouve est soudainement en proie aux eaux du Fleuve. Le haut-rêvant doit combattre la crue. S'il réussit, celle-ci est contenue. S'il rate, il se retrouve les pieds dans l'eau et doit donc combattre le Fleuve immédiatement. Effets secondaires: la case devient une case de Marais et reste ainsi pendant 12 heures (comme lors d'une dérobade). Si la crue a lieu sur une case de Fleuve, de Lac ou de Marais, le haut-rêvant est emporté par le courant vers une case fluviale voisine.
            idHexaJoueur = getHexagoneIdParCoordonnees(positionJoueur.x, positionJoueur.y);
            if($.inArray(hexagones[idHexaJoueur].oH_type, terrainsHumides) > -1)
            {
                direction = lanceD(1, 6, false);
                var cpt = 0;
                var textDerive = "Le Fleuve est en crue, vous êtes emporté par le courant";
                do
                {
                    idHexaArrive = hexagones[idHexaJoueur].oH_getVoisinDirection(direction+cpt);
                    if(idHexaArrive === null)
                    {
                        //Emporté en dehors de la carte, réapparait sur un hexa au hasard
                        caseTMR = caseTMRAleatoire();
                        idHexaArrive = getHexagoneIdParCoordonnees(caseTMR.x, caseTMR.y);
                        logVoyage(textDerive);
                        perdu = true;
                    }
                    if($.inArray(hexagones[idHexaArrive].oH_type, terrainsHumides)>-1)
                    {
                        //emporté sur une case humide voisine
                        logVoyage(textDerive);
                        perdu = true;
                    }
                    cpt++;
                }
                while(cpt < 7 && !perdu);

                if(perdu)
                {
                    perdu = false;
                    positionJoueur.x = hexagones[idHexaArrive].oH_x;
                    positionJoueur.y = hexagones[idHexaArrive].oH_y;
                    //Ne plus donner info Coordonnée et Nom, ne plus afficher Demi-Rêve
                    $demiReve.val(infoDemireve(positionJoueur.x, positionJoueur.y));
                    majPlateauTMR();
                    return true;
                }
            }
            //Sinon :
            hexagones[idHexaJoueur].oH_type = MARAIS;
            logVoyage("Le Fleuve est en crue, le terrain devient marécageux");
            majPlateauTMR();
            return true;
            break;
        case RENCONTRE_ALT_FAILLE :
            //si les rêves sont parcourus de déchirures, les Terres Médianes, elles, recèlent des Failles, créées par des tremblements de rêve. Le haut-rêvant doit combattre la faille qui vient de s'ouvrir sous ses pieds. S'il réussit, le gouffre se referme. Si c'est raté, il tombe dedans et subit une réinsertion aléatoire.
            //Teleport au Hasard dans TMR
            perdu = true;
            logVoyage("Vous tombez dans la " + RENCONTRE_ALT_FAILLE + ", qui sait où vous êtes maintenant...");
            caseTMR = caseTMRAleatoire();
            positionJoueur.x = caseTMR.x;
            positionJoueur.y = caseTMR.y;
            $demiReve.val(infoDemireve(positionJoueur.x, positionJoueur.y));
            majPlateauTMR();
            return true;
            break;
        case RENCONTRE_ALT_BROUILLARD :
            //la case où se trouve le magicien est soudainement remplie de brouillard et il ne voit plus où il va. Il doit combattre le brouillard. S'il réussit, il se déplace normalement lors de son prochain mouvement, mais, faute d'une critique ou d'une particulière, il y aura aussi du brouillard dans sa case d'arrivée et il faut recommencer (sinon le brouillard se dissipe). En cas d'échec, le mouvement du haut-rêvant est aléatoire, il y a du brouillard dans sa case d'arrivée et, s'il veut lancer un sort, il subit un malus de -2. Une hypothèse veut que les brouillards soient créés par des tourbillons passant au-dessus du Fleuve (d'autres penchent pour les Déserts, d'autres encore disent que ce sont des tourbillons avortés).
            brouillardPerturbeDeplacement = true;
            logVoyage("Le " + RENCONTRE_ALT_BROUILLARD + " vous perturbe, vous n'arriverez pas forcément où vous le souhaitez...");
            return true;
            break;
        default :
            //Il ne se passe rien
            logVoyage(rencontreActive.nature + " disparait");
            return true;
    }
}

function souffleDragon()
{
    //@TODO Souffle de Dragon

}

function queueDragon()
{
    //@TODO Queue de Dragon

}

function teteDragon()
{
    //@TODO Tete de Dragon

}

function quitteTMR()
{
    enTMR = false;
    //Si on quitte depuis "popupPerdu"
    $("#popupPerdu").popup("close");

    //activation des jauges
    $cptEndurance.slider( "option", "disabled", false );
    $cptFatigue.slider( "option", "disabled", false );
    $cptEtat.slider( "option", "disabled", false );
    $cptDraconic.slider( "option", "disabled", false );
    $cptReve.slider( "option", "disabled", false );
    $cptRefoulement.slider( "option", "disabled", false );
    $deplacement.slider( "option", "disabled", false );
    $rencontresAlternatives.slider( "option", "disabled", false );

    majPlateauTMR();

    logVoyage("Round "+roundEnTMR+" :", "texte");
    if(parseInt($cptFatigue.val())> parseInt($cptEndurance.val())*2 || parseInt($cptReve.val()) < 1)
    {
        logVoyage("Passage des TMR aux Hautes Terres du Rêve...", "texte");

    }
    else
    {
        logVoyage("Descente des TMR.", "texte");
    }
    logVoyage("Position du demi-rêve dans les TMRs : " + infoDemireve(positionJoueur.x, positionJoueur.y), "texte");
    $("#monteTMR").val("Monter en TMR").button('refresh').off("click").on("click", monteTMR).closest('div').removeClass('ui-focus');
}

function logVoyage(text, typeInfo)
{
    var baliseOuvrante = "<li>";
    var baliseFermante = "</li>";
    if(typeof typeInfo === "undefined"){
        typeInfo = "ligne";
    }
    switch (typeInfo){
        case "texte" :
            baliseOuvrante = "";
            baliseFermante = "<br />";
            break;
        case "debutCase" :
            baliseOuvrante = "<span>";
            baliseFermante = "</span><ul></ul>";
            break;
    }
    var $selector = $infosVoyageEnTMR;
    if(typeInfo === "ligne")
    {
        $selector = $infosVoyageEnTMR.find("ul:last");
    }
    $selector.append(baliseOuvrante+text+baliseFermante);
    //Pour que le scroll aille en bas
    $infosVoyageEnTMR.animate({
        scrollTop: $infosVoyageEnTMR.prop("scrollHeight")
    }, 300);

}

/**
 * @desc Initialisation des variables du jeu
 */
function initGame(){
    //Libération du bouton "Start"
    $("#start").removeClass("ui-disabled");
    jeuEnCours = false;
    enTMR = false;
    $("#TMR").removeClass("jeuEnCours");
    $("#plateauTMR").hide();
}

function demarrerPartie()
{
    canvasTMR = document.getElementById("HexCanvas");
    contextTMR = canvasTMR.getContext('2d');
    hexagonGrid = new HexagonGrid("HexCanvas", BASE_RADIUS_HEXAGONE);

    canvasPerdu = document.getElementById("PerduCanvas");
    contextPerdu = canvasPerdu.getContext('2d');
    perduGrid = new HexagonGrid("PerduCanvas", BASE_RADIUS_HEXAGONE);
    perduGrid.drawHexGrid(3,3,10,10,true, true);

    canvasMaitrise = document.getElementById("MaitriseCanvas");
    contextMaitrise = canvasMaitrise.getContext('2d');

    $("#start").addClass("ui-disabled");
    $("#TMR").addClass("jeuEnCours");
    $("#plateauTMR").attr("style", "display: table");
    $("#aideTMRInfos").hide();
    jeuEnCours = true;
    hexagonGrid.drawHexGrid(LIGNES,COLONNES,50,50);

    majPlateauTMR();
}

function defineObjetsDom()
{
    $popupText = $("#popupText");
    $popupText.enhanceWithin().popup();
    $emplacementEnJeu = $('#emplacementEnJeu');
    //compteurs
    $cptEndurance = $( "#endurance" );
    $cptFatigue = $( "#fatigue" );
    $cptEtat = $( "#etat" );
    $cptDraconic = $( "#draconic" );
    $cptReve = $( "#reve" );
    $cptRefoulement = $( "#refoulement" );
    $deplacement = $( "#deplacement" );
    $rencontresAlternatives = $( "#rencontresAlternatives" );

    //informations
    $infosVoyageEnTMR = $("#voyageEnTMR");
}

/**
 * écouteurs de l'écran
 */
$(function () {
    defineObjetsDom();
    if(idPage === "TMR" && !jeuEnCours)
    {
        initGame();
    }
    $( "#start" ).click(function () {
        demarrerPartie();
    });
    $("#popupPerdu").bind({
        popupafterclose: function(){
            //"Chaining of popups not allowed" /!\ seulement si event ne demande pas autre action
            if(enTMR)
            {
                if(typeof rencontreActive.nature !== "undefined")
                {
                    $("#popupRencontre").popup("open", 'positionTo: #plateauJeu');
                }
                else if(perdu)
                {
                    $("#popupPerdu").popup("open", 'positionTo: #plateauJeu');
                }
            }
        }
    });
    $("#popupRencontre").bind({
        popupafterclose: function(){
            //"Chaining of popups not allowed" /!\ seulement si event ne demande pas autre action
            if(enTMR)
            {
                if(typeof rencontreActive.nature !== "undefined")
                {
                    $("#popupRencontreMaitrise").popup("open", 'positionTo: #plateauJeu');
                }
                else if (perdu) {
                    $("#popupPerdu").popup("open", 'positionTo: #plateauJeu');
                }
            }
        }
    });
    //Quand on clique sur le header d'un popup
    $('div[data-role="header"]', '.popup-draggable').on("mousedown", function(){
        //Rendre les popups draggables
        $(this).parent().draggable();
        //Quand on lâche le clic
        $(this).on("mouseup", function(){
            //Retire le draggable
            $(this).parent().draggable().draggable("destroy");
        });
    });
});
var idPage;
$(document).on( "pagecreate", function(){
    defineTMR();
});
$(document).on('pagebeforeshow', function() {
    idPage = $.mobile.activePage.attr('id');
});
$( document).on("pageshow","#Outils", function() {
    $("#caracteristique").change(calculPourcentage);
    $("#competence").change(calculPourcentage);
    $("#bonusMalus").change(calculPourcentage);
    calculPourcentage();
    demireveAleatoire();
    lanceDdr();
    lanceDSelect();
    $("#select-d").change(lanceDSelect);
    lanceJetStress()
    $("#ptsStress").change(lanceJetStress);
    $("#ptsReves").change(lanceJetStress);
    $("#vocation").change(lanceJetStress);
    //Mise en place du canvas : AstrologieCanvas
    canvasAstrologie = document.getElementById("AstrologieCanvas");
    contextAstrologie = canvasAstrologie.getContext("2d");
    //Réinitialise les coordonné puis Centre le point d'origine
    contextAstrologie.setTransform(1, 0, 0, 1, 0, 0);
    contextAstrologie.translate(canvasAstrologie.height / 2, canvasAstrologie.height / 2);
    $("#nbAstral").change(calculAstrologie);
    $("input[name=heureNaissance]").change(calculAstrologie);
    lanceNbAstral();
});


$( document ).on( "pageshow","#TMR", function() {
    defineObjetsDom();
    if(!jeuEnCours){
        initGame();
    }
    $( "#popupRencontre" ).on('click', '.actionRencontre', function () {
        actionRencontre($(this).attr("id"));
    });

    $("#aideTMRBtn").on('click', function(){
        $("#aideTMRInfos").toggle();
    });
});
