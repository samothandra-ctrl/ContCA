/*
  Tabela de alimentos do app Calorias.
  Valores por 100 g (ou 100 ml): kcal | proteína g | carboidrato g | gordura g.
  Formato de cada linha:
    nome | kcal | P | C | G | fonte | apelidos (separados por ;) | porções em gramas
  Fontes: T = TACO (padrão brasileiro), U = USDA, R = rótulo médio (industrializados),
          C = receita caseira média.
  Chaves de porção: d = porção padrão, un = unidade, fat = fatia, cs = colher de sopa,
  cc = colher de chá, cv = colher de servir, xic = xícara, cp = copo, cn = concha,
  pc = pedaço, pt = porção/prato, lat = lata, gf = garrafa, pun = punhado, sc = scoop,
  bola, pote, pct = pacote, esp = espiga, fio, taca, dose.

  ATENÇÃO: são valores de referência aproximados, não uma cópia oficial das tabelas.
  Para mais precisão, use o rótulo do produto ou a TACO oficial (nepa.unicamp.br)
  e importe/adicione alimentos em Ajustes > Meus alimentos.
*/
const FOODS_RAW = `
# Arroz, massas e cereais
Arroz branco cozido|128|2.5|28.1|0.2|T|arroz;arroz branco|d=150;cs=25;cv=60;xic=160;cn=100
Arroz integral cozido|124|2.6|25.8|1.0|T|arroz integral|d=150;cs=25;cv=60;xic=160
Arroz parboilizado cozido|123|2.6|26.7|0.4|T|arroz parboilizado|d=150;cs=25;cv=60;xic=160
Arroz branco cru|358|7.2|78.8|0.3|T|arroz cru|d=50;cs=20;xic=185
Macarrão cozido|150|5.3|30|0.9|U|macarrao;espaguete;spaghetti;penne;massa;talharim;parafuso;macarronada|d=140;xic=140;cv=70
Macarrão integral cozido|124|5.3|26.5|0.5|U|massa integral;macarrao integral|d=140;xic=140
Macarrão cru|371|10|77.9|1.3|T|massa crua;espaguete cru|d=80;cs=15
Macarrão instantâneo (miojo) cru|444|8.8|62.4|17.2|T|miojo;lamen;macarrao instantaneo|d=80;un=80;pct=80
Nhoque de batata cozido|130|3|27|0.6|R|nhoque|d=150
Cuscuz de milho cozido|113|2.2|25.3|0.7|T|cuscuz;cuscuz nordestino|d=150;pc=100
Flocão de milho (cuscuz cru)|351|7.2|79.1|1.5|T|flocao;flocao de milho;farinha de milho amarela|d=50;cs=15
Cuscuz marroquino cozido|112|3.8|23|0.2|U|cuscuz marroquino|d=120
Polenta cozida|70|1.5|15|0.4|C|polenta;angu|d=120
Tapioca (goma hidratada)|240|0|60|0|R|tapioca;beiju;goma hidratada|d=60;un=60
Goma de tapioca (seca)|350|0.5|86|0.1|R|goma;goma de tapioca|d=30;cs=15
Farinha de mandioca|365|1.2|89.2|0.3|T|farinha de mandioca;farinha;farinha de mesa|d=20;cs=15
Farinha de trigo|360|9.8|75.1|1.4|T|trigo;farinha de trigo|d=30;cs=15;xic=120
Farinha de rosca|371|11.4|75|1.5|T|farinha de rosca;panko|d=20;cs=12
Fubá|353|7.2|79.1|1.9|T|fuba;farinha de milho|d=30;cs=15
Amido de milho (maisena)|361|0.3|87.2|0|T|maisena;amido de milho|d=15;cs=10
Polvilho doce|351|0.4|86.6|0.1|T|polvilho|d=20;cs=12
Aveia em flocos|394|13.9|66.6|8.5|T|aveia;flocos de aveia|d=30;cs=10;xic=80
Granola|421|10|66|13|R|granola|d=40;cs=12;xic=110
Cereal matinal de milho açucarado|380|5|86|1|R|sucrilhos;cereal;cereal matinal;corn flakes|d=40;xic=40
Barra de cereal|390|5|70|9|R|barrinha;barrinha de cereal|d=22;un=22
Quinoa cozida|120|4.4|21.3|1.9|U|quinoa|d=120;xic=185;cs=25
Quinoa crua|368|14.1|64.2|6.1|U|quinoa crua|d=40;cs=12
Pipoca estourada (sem óleo)|387|12.9|77.8|4.5|U|pipoca;pipoca de pipoqueira|d=20;xic=8
Pipoca de micro-ondas|450|9|55|22|R|pipoca de micro-ondas;pipoca microondas|d=40;pct=100
Milho verde cozido|96|3.2|21|1.5|T|milho;milho verde;espiga de milho|d=100;cs=20;esp=150
Biscoito cream cracker|432|10.1|68.7|14.4|T|cream cracker;bolacha salgada;biscoito salgado|d=30;un=6
Biscoito água e sal|432|10|70|14|R|agua e sal;bolacha agua e sal|d=30;un=5
Biscoito maisena|443|8.1|75.2|12|T|maizena;bolacha maisena|d=30;un=5
Biscoito recheado de chocolate|472|5.5|68|19|R|bolacha recheada;oreo;trakinas;biscoito recheado|d=30;un=11
Biscoito de polvilho|440|1|85|11|R|rosquinha de polvilho;biscoito polvilho|d=30
Wafer recheado|510|5.5|65|26|R|wafer|d=30;un=10
Torrada tradicional|377|10.5|72|4.5|R|torrada;torradinha|d=20;un=7
Galete de arroz|387|8|82|2.8|R|biscoito de arroz;bolacha de arroz|d=18;un=9

# Pães
Pão francês|300|8|58.6|3.1|T|pao;paozinho;pao frances;pao de sal|d=50;un=50;fat=25
Pão de forma tradicional|253|9.4|44.1|3.7|T|pao de forma;pao fatiado|d=50;fat=25;un=25
Pão de forma integral|253|9.4|49.9|3.7|T|pao integral;pao de forma integral|d=50;fat=25;un=25
Pão de queijo|363|5.1|34.2|24.6|T|pao de queijo|d=60;un=30
Pão de hambúrguer|270|9|50|4|R|pao de hamburguer;pao de hot dog|d=55;un=55
Pão sírio (pita)|275|9|55|1.2|R|pao sirio;pao pita;pita|d=60;un=60
Pão doce|321|7.5|55|7|R|pao doce;pao de leite;pao de batata|d=60;un=60
Pão de alho|350|7|40|18|R|pao de alho|d=60;un=60
Bisnaguinha|290|8.5|52|4.5|R|pao bisnaguinha;bisnaguinha|d=50;un=25
Croissant|406|8.2|45.8|21|U|croissant|d=60;un=60
Pão de mel|380|5|68|10|R|pao de mel|d=40;un=40
Tortilla de trigo (wrap)|310|8|50|8|R|wrap;tortilla;rap10|d=60;un=60

# Tubérculos e raízes
Batata inglesa cozida|52|1.2|11.9|0|T|batata;batata cozida|d=130;un=130
Batata inglesa crua|64|1.8|14.7|0|T|batata crua|d=130;un=130
Batata assada (com casca)|93|2.5|21|0.1|U|batata assada|d=150;un=170
Batata frita (caseira)|267|5.3|35.6|13.1|T|batata frita;fritas|d=100;pt=100
Batata frita (fast food)|312|3.4|41|15|R|fritas do mc;batata do mc;batata fast food;batata mcdonalds|d=110;pt=110
Batata palha|540|6|50|34|R|batata palha|d=15;pun=15;cs=8
Purê de batata|100|2|15|3.5|C|pure;pure de batata|d=100;cs=35;cn=100
Batata-doce cozida|77|0.6|18.4|0.1|T|batata doce|d=130;un=130;pc=100
Batata-doce crua|118|1.3|28.2|0.1|T|batata doce crua|d=130
Mandioca cozida (aipim)|125|0.6|30.1|0.3|T|aipim;macaxeira;mandioca|d=100;pc=60
Mandioca frita|300|1.4|50.3|11.2|T|mandioca frita;aipim frito|d=100
Inhame cozido|97|2.1|23.2|0.1|T|inhame|d=100
Mandioquinha cozida|80|0.9|18.9|0.2|T|batata baroa;mandioquinha|d=100

# Feijões e leguminosas
Feijão carioca cozido|76|4.8|13.6|0.5|T|feijao;feijao carioca;feijao cozido|d=100;cn=100;cs=20;cv=45
Feijão preto cozido|77|4.5|14|0.5|T|feijao preto|d=100;cn=100;cs=20
Feijão branco cozido|90|6|16|0.4|U|feijao branco|d=100;cn=100;cs=20
Feijão fradinho cozido|78|4.8|13.5|0.6|T|feijao fradinho;feijao de corda|d=100;cn=100;cs=20
Feijão carioca cru|329|20|61.2|1.3|T|feijao cru|d=60;cs=15
Feijão preto cru|324|21.3|58.8|1.4|T|feijao preto cru|d=60;cs=15
Lentilha cozida|116|9|20.1|0.4|U|lentilha|d=100;cn=100
Grão-de-bico cozido|164|8.9|27.4|2.6|U|grao de bico;grao-de-bico|d=100;cs=20;xic=160
Ervilha em conserva|74|4.6|13.4|0.7|T|ervilha|d=50;cs=18
Soja cozida|173|16.6|9.9|9|U|soja|d=100
Edamame|121|11.9|8.9|5.2|U|edamame|d=100
Tofu|76|8|1.9|4.8|U|tofu|d=100;pc=80
Proteína texturizada de soja (seca)|330|52|30|1.2|R|pts;proteina de soja;carne de soja|d=30;cs=10
Homus (pasta de grão-de-bico)|166|7.9|14.3|9.6|U|homus;hummus;humus|d=30;cs=20
Feijoada|150|8.5|9|9|C|feijoada|d=250;cn=120

# Carnes bovinas
Alcatra grelhada|241|31.9|0|11.6|T|alcatra;bife;bife grelhado|d=120;un=120
Contra-filé grelhado|194|35.9|0|4.5|T|contrafile;contra file;contra-file;bife de contrafile|d=120;un=120
Contra-filé com gordura grelhado|278|29.4|0|17|T|contrafile com gordura|d=120;un=120
Patinho grelhado|219|35.9|0|7.3|T|patinho|d=120;un=120
Filé mignon grelhado|220|32.8|0|8.8|T|file mignon;mignon|d=120;un=120
Picanha grelhada (com gordura)|289|27|0|19.6|T|picanha;picanha com gordura|d=120;fat=40;pc=100
Picanha grelhada (sem gordura)|215|31|0|9|T|picanha sem gordura|d=120
Maminha grelhada|195|31|0|7.6|T|maminha|d=120
Fraldinha grelhada|285|28|0|18|T|fraldinha|d=120
Coxão mole cozido|219|32.4|0|8.9|T|coxao mole|d=120
Coxão duro cozido|217|31.9|0|8.7|T|coxao duro;carne de panela|d=120
Acém cozido|215|27|0|11.5|T|acem|d=120
Costela bovina assada|373|28.8|0|27.4|T|costela;costela bovina;costelao|d=150
Carne moída refogada|212|26.7|0|10.9|T|carne moida;moida|d=100;cs=30
Carne moída (patinho) crua|137|21.7|0|5|T|patinho moido;carne moida crua|d=100
Carne seca/charque cozida|262|36.4|0|11.9|T|carne seca;charque;carne de sol;jaba|d=100
Fígado bovino grelhado|225|29.9|1.2|9|T|figado|d=100
Hambúrguer bovino grelhado|250|18|3|18|R|hamburguer;burger;hamburguer de carne|d=90;un=90
Almôndega ao molho|190|13|8|11|C|almondega;almondegas|d=100;un=30
Bife à milanesa (frito)|280|20|13|16|C|bife empanado;milanesa;bife a milanesa|d=120;un=120
Estrogonofe de carne|150|11|4|10|C|strogonoff de carne;estrogonofe;strogonoff|d=150

# Frango e aves
Peito de frango grelhado|159|32|0|2.5|T|frango;frango grelhado;peito de frango;file de frango|d=120;un=120
Peito de frango cozido (desfiado)|163|31.5|0|3.2|T|frango cozido;frango desfiado;peito cozido|d=100;cs=25
Peito de frango cru|119|21.5|0|3|T|frango cru|d=120
Coxa de frango assada (com pele)|215|28.5|0|10.4|T|coxa;coxa de frango;sobrecoxa;frango assado|d=100;un=100
Coxa de frango cozida (sem pele)|167|26.9|0|5.8|T|coxa sem pele|d=100;un=100
Sobrecoxa de frango sem pele assada|190|25|0|9|T|sobrecoxa sem pele|d=100;un=110
Asinha de frango assada|290|27|0|20|T|asa de frango;asinha;coxinha da asa|d=100;un=35
Filé de frango à milanesa (frito)|270|22|11|15|C|frango empanado;frango a milanesa;file de frango empanado|d=120;un=120
Nuggets de frango (frito)|295|13|18|19|R|nuggets;nugget|d=100;un=20
Coração de frango grelhado|185|26|0.1|8|T|coracao de frango;coracao|d=100
Estrogonofe de frango|140|13|4|8|C|strogonoff de frango|d=150
Parmegiana de frango|225|20|9|12|C|frango a parmegiana;parmegiana|d=200
Peito de peru assado|135|30|0|1.5|U|peru;peito de peru|d=100

# Suínos, embutidos e frios
Lombo de porco assado|210|35.7|0|6.4|T|lombo;lombo suino;porco|d=120
Bisteca de porco grelhada|280|28.9|0|17.3|T|bisteca;bisteca suina|d=120;un=120
Pernil de porco assado|262|32.1|0|13.9|T|pernil|d=120
Costelinha de porco assada|402|30.2|0|30.3|T|costelinha;costela suina|d=120
Bacon frito|541|36.4|1.4|42|T|bacon|d=20;fat=8
Linguiça de porco grelhada|296|24.1|0|21.2|T|linguica;linguica toscana;toscana|d=100;un=100
Linguiça calabresa frita|325|20|2|26|R|calabresa;linguica calabresa|d=80;fat=20
Salsicha cozida|257|10.8|3|22|T|salsicha;salsichao;hot dog|d=50;un=50
Presunto cozido|94|14.3|1.4|3.5|T|presunto;apresuntado|d=30;fat=15
Mortadela|269|12|4|22.8|T|mortadela|d=30;fat=15
Salame|398|25.8|2.9|31.2|T|salame|d=30;fat=5
Peito de peru fatiado (frios)|100|17|2|2.5|R|blanquet;peito de peru fatiado|d=30;fat=15
Torresmo|544|28|0|47|R|torresmo;pururuca|d=30

# Peixes e frutos do mar
Tilápia grelhada|128|26.2|0|2.7|U|tilapia;peixe;peixe grelhado|d=120;un=120
Salmão grelhado|243|26.1|0|14.5|T|salmao;salmao grelhado|d=120;un=120
Salmão cru|208|20|0|13.4|U|salmao cru;sashimi de salmao|d=100
Atum em lata (ao natural)|116|25.5|0|0.8|R|atum;atum em lata;atum natural|d=80;lat=120
Atum em lata (no óleo, escorrido)|190|25|0|9|R|atum no oleo;atum ao oleo|d=80;lat=120
Sardinha em lata (escorrida)|208|24.6|0|11.5|U|sardinha;sardinha em lata|d=85;lat=85
Sardinha assada|164|25|0|6|T|sardinha assada;sardinha fresca|d=100
Merluza/pescada cozida|110|23|0|1.4|T|merluza;pescada;pescada cozida|d=120
Bacalhau cozido|128|28|0|1.4|T|bacalhau|d=120
Camarão cozido|99|24|0.2|0.3|U|camarao|d=100;un=10;cs=15
Polvo cozido|164|29.8|4.4|2.1|U|polvo|d=100
Mexilhão cozido|172|23.8|7.4|4.5|U|mexilhao|d=100
Filé de peixe empanado (frito)|250|14|18|13|R|peixe empanado;peixe a milanesa;tilapia empanada|d=120;un=120
Kani kama|95|8|13|0.5|R|kani;kani kama;kanikama|d=50;un=15
Sushi (hossomaki/uramaki)|145|5|28|1.5|R|sushi;uramaki;hossomaki;makis|d=150;un=30
Temaki|190|7|27|5|R|temaki|d=130;un=130
Moqueca de peixe|110|12|3|5.5|C|moqueca|d=250

# Ovos
Ovo cozido|146|13.3|0.6|9.5|T|ovo;ovos;ovo cozido|d=50;un=50
Ovo frito|240|15.6|1.2|18.6|T|ovo frito|d=50;un=50
Ovo mexido|180|11.5|1.5|14|C|ovo mexido;ovos mexidos|d=60;un=60
Ovo cru|143|13|1.6|8.9|T|ovo cru|d=50;un=50
Clara de ovo|52|10.9|0.7|0.2|U|clara;claras;clara de ovo|d=33;un=33
Gema de ovo cozida|353|15.9|0.6|31.9|T|gema|d=17;un=17
Omelete|154|10.6|0.6|12|U|omelete|d=120;un=120
Ovo de codorna cozido|158|13|0.4|11.1|U|ovo de codorna|d=10;un=10

# Leite e derivados
Leite integral|61|2.9|4.3|3.2|T|leite|d=200;cp=200;xic=240
Leite semidesnatado|45|3.3|4.8|1.6|R|semidesnatado|d=200;cp=200;xic=240
Leite desnatado|35|3.4|4.9|0.1|T|desnatado|d=200;cp=200;xic=240
Leite em pó integral|497|25.4|39.2|26.9|T|leite em po;ninho|d=26;cs=15
Leite condensado|313|7.7|57|6.7|T|leite condensado|d=20;cs=20;lat=395
Creme de leite|221|1.5|4.5|22|T|creme de leite|d=20;cs=15
Leite de coco|166|1.2|2.2|18.4|T|leite de coco|d=50;cs=15
Iogurte natural integral|51|4.1|1.9|3|T|iogurte;iogurte natural|d=170;un=170;pote=170;cs=20
Iogurte natural desnatado|41|3.8|5.8|0.3|T|iogurte desnatado|d=170;pote=170
Iogurte de frutas|70|1.9|12.5|1.5|T|iogurte de morango;iogurte sabor;iogurte com frutas|d=170;pote=170
Iogurte grego natural|97|9|4|5|R|iogurte grego|d=100;pote=100
Iogurte proteico (zero gordura)|62|10|4|0.2|R|iogurte proteico;skyr;iogurte whey|d=170;pote=170
Bebida láctea|70|2.2|12.5|1.2|R|bebida lactea;danone;iogurte liquido|d=170;pote=170;cp=200
Leite fermentado (tipo Yakult)|65|1.2|15|0|R|yakult;leite fermentado|d=80;un=80
Achocolatado pronto (caixinha)|70|3|11|1.5|R|toddynho;achocolatado pronto;nescau pronto|d=200;un=200
Queijo mussarela|330|22.6|3|25.2|T|queijo;mussarela;mucarela;mozarela|d=30;fat=15;pc=30
Queijo prato|360|22.7|2.2|29.1|T|prato;queijo prato|d=30;fat=15
Queijo minas frescal|264|17.4|3.2|20.2|T|minas;queijo minas;queijo branco|d=50;fat=30;pc=50
Queijo coalho|310|22|2|24|R|coalho|d=50;un=50
Queijo parmesão ralado|453|35.6|1.7|33.5|T|parmesao;queijo ralado|d=10;cs=10
Ricota|140|12.6|3.8|8.1|T|ricota|d=50;fat=30
Queijo cottage|98|11|3.4|4.3|U|cottage|d=50;cs=25
Cream cheese|350|6|4|34|R|cream cheese|d=20;cs=20
Requeijão cremoso|257|9.6|3.1|23.4|T|requeijao;catupiry|d=25;cs=25
Requeijão light|150|9|5|10|R|requeijao light|d=25;cs=25
Queijo provolone|351|25.6|2.1|26.6|T|provolone|d=30;fat=15
Manteiga|726|0.4|0.1|82.4|T|manteiga|d=10;cs=14;cc=5
Margarina|596|0.5|0.4|65.7|T|margarina;creme vegetal|d=10;cs=14;cc=5
Sorvete de creme|199|3.2|28|8|T|sorvete|d=60;bola=60
Picolé de fruta|85|0|21|0|R|picole;picole de fruta|d=60;un=60
Bebida de soja|41|3.1|2.5|2.1|R|leite de soja;soja|d=200;cp=200
Leite de amêndoas (sem açúcar)|15|0.6|0.6|1.1|U|leite de amendoas;leite vegetal|d=200;cp=200
Leite de aveia|45|1|7|1.5|R|leite de aveia|d=200;cp=200

# Frutas
Banana prata|98|1.3|26|0.1|T|banana;banana prata|d=70;un=70
Banana nanica|92|1.4|23.8|0.1|T|banana nanica;banana caturra|d=100;un=100
Banana-da-terra cozida|128|1.4|33.7|0.1|T|banana da terra|d=100;un=100
Maçã|56|0.3|15.2|0|T|maca|d=150;un=150
Laranja|37|1|8.9|0.1|T|laranja;laranja pera|d=180;un=180
Tangerina (mexerica)|38|0.9|9.3|0.1|T|mexerica;tangerina;bergamota;ponkan|d=120;un=120
Mamão papaia|40|0.5|10.4|0.1|T|mamao;papaia|d=150;fat=130;un=300
Mamão formosa|45|0.8|11.6|0.1|T|mamao formosa|d=150;fat=150
Melancia|33|0.9|8.1|0|T|melancia|d=200;fat=200
Melão|29|0.7|7.5|0|T|melao|d=150;fat=150
Abacaxi|48|0.9|12.3|0.1|T|abacaxi|d=100;fat=75
Manga palmer|72|0.4|19.4|0.2|T|manga|d=150;un=300;fat=100
Manga tommy|51|0.9|12.8|0.2|T|manga tommy|d=150;un=250;fat=100
Uva|53|0.7|13.6|0.2|T|uva;uvas|d=100;pun=80;xic=150
Morango|30|0.9|6.8|0.3|T|morango;morangos|d=100;un=15;xic=150
Abacate|96|1.2|6|8.4|T|abacate;abacate amassado|d=100;cs=35
Pera|53|0.6|14|0.1|T|pera|d=165;un=165
Pêssego|36|0.8|9.3|0.1|T|pessego|d=100;un=100
Ameixa|53|0.8|13.9|0.2|T|ameixa|d=60;un=60
Ameixa seca|240|2.2|63.9|0.4|T|ameixa seca|d=20;un=8
Kiwi|51|1.3|11.5|0.6|T|kiwi|d=75;un=75
Goiaba vermelha|54|1.1|13|0.4|T|goiaba|d=150;un=150
Caqui|71|0.6|19.3|0.1|T|caqui|d=180;un=180
Figo|41|1|10.2|0.2|T|figo|d=40;un=40
Maracujá (polpa)|68|2|12.3|2.1|T|maracuja|d=50;un=40
Caju|43|1|10.3|0.3|T|caju|d=60;un=60
Acerola|33|0.9|8|0.2|T|acerola|d=100;un=5
Jabuticaba|58|0.6|15.3|0.1|T|jabuticaba|d=100;un=8
Mirtilo|57|0.7|14.5|0.3|U|mirtilo;blueberry|d=50;xic=150
Framboesa|52|1.2|11.9|0.7|U|framboesa|d=50;xic=125
Limão (suco)|22|0.4|7|0.2|T|limao;suco de limao|d=15;cs=15
Coco fresco|406|3.7|10.4|42|T|coco;polpa de coco|d=30;pc=30
Coco ralado|456|3|18|42|R|coco ralado|d=10;cs=10
Água de coco|22|0|5.3|0|T|agua de coco|d=250;cp=200;un=300
Uva passa|299|3.1|79.2|0.5|U|uva passa;passas|d=20;cs=10;pun=30
Damasco seco|241|3.4|62.6|0.5|U|damasco|d=30;un=8
Tâmara|282|2.5|75|0.4|U|tamara|d=24;un=8
Açaí (polpa pura)|58|0.8|6.2|3.9|T|acai;polpa de acai|d=100;pote=100
Açaí com guaraná (polpa)|110|1.2|19|3.5|R|acai com guarana;acai na tigela;acai doce|d=200;pote=200
Suco de laranja natural|45|0.7|10.4|0.2|T|suco de laranja|d=200;cp=200
Suco de uva integral|62|0.4|15.1|0.1|R|suco de uva|d=200;cp=200
Suco de abacaxi (natural)|41|0.3|10|0.1|R|suco de abacaxi|d=200;cp=200
Pêssego em calda|70|0.6|18|0.1|R|pessego em calda;frutas em calda|d=100;un=50

# Verduras e legumes
Alface crespa|11|1.3|1.7|0.2|T|alface;alface crespa;folhas|d=40;un=10;pt=50
Alface americana|14|0.9|3|0.1|U|alface americana|d=40;un=10
Rúcula|13|1.8|2.1|0.2|T|rucula|d=30
Agrião|17|2.7|2.3|0.2|T|agriao|d=30
Couve refogada|90|1.7|8.7|6.6|T|couve;couve refogada;couve manteiga|d=50;cs=25
Couve crua|27|2.9|4.3|0.5|T|couve crua|d=50
Espinafre cozido|23|3|3.8|0.3|U|espinafre|d=50
Repolho cru|17|0.9|3.9|0.1|T|repolho|d=50
Brócolis cozido|25|2.1|4.4|0.5|T|brocolis|d=80;xic=90;pt=80
Couve-flor cozida|23|1.9|4.2|0.2|T|couve flor|d=80
Cenoura crua|34|1.3|7.7|0.2|T|cenoura;cenoura crua|d=50;un=70
Cenoura cozida|30|0.8|6.7|0.2|T|cenoura cozida|d=50;un=70
Beterraba cozida|32|1.3|7.2|0.1|T|beterraba|d=50;un=80
Beterraba crua|49|1.9|11.1|0.1|T|beterraba crua|d=50;un=80
Tomate|15|1.1|3.1|0.2|T|tomate;tomate cereja|d=100;un=120
Pepino|10|0.9|2|0.1|T|pepino|d=60;un=200
Pimentão verde|21|1.1|4.9|0.2|T|pimentao;pimentao verde|d=50;un=120
Pimentão vermelho|23|1|5.5|0.2|T|pimentao vermelho|d=50;un=120
Cebola|39|1.7|8.9|0.2|T|cebola|d=30;un=100
Alho|113|7|23.9|0.2|T|alho|d=3;un=3
Abóbora cozida|48|1.4|10.8|0.7|T|abobora;moranga;cabotia|d=80;cs=30
Abobrinha cozida|15|1.1|3|0.2|T|abobrinha|d=80
Berinjela cozida|19|0.7|4.5|0.1|T|berinjela|d=80
Chuchu cozido|19|0.4|4.8|0|T|chuchu|d=80
Vagem cozida|25|1.4|5.3|0.2|T|vagem|d=60
Quiabo cozido|22|1.9|4.5|0.2|T|quiabo|d=60
Palmito em conserva|23|1.8|4.3|0.5|T|palmito|d=50
Champignon (cogumelo)|22|3.1|3.3|0.3|U|cogumelo;champignon;shimeji|d=50
Legumes cozidos (mix)|40|1.7|7|0.5|C|legumes;legumes cozidos;salada cozida|d=100
Azeitona verde|145|1|3.8|15|U|azeitona|d=20;un=4
Azeitona preta|115|0.8|6|10.7|U|azeitona preta|d=20;un=4
Picles|12|0.3|2.3|0.2|R|picles;pepino em conserva|d=20

# Oleaginosas, sementes e gorduras
Amendoim torrado|606|27.2|18.8|46.4|T|amendoim|d=30;pun=30;cs=15
Amendoim japonês|470|14|47|27|R|amendoim japones|d=30;pun=30
Pasta de amendoim|588|25.1|20|50.4|U|pasta de amendoim;manteiga de amendoim|d=15;cs=15;cc=6
Castanha-do-pará|643|14.5|15.1|63.5|T|castanha do para;castanha-do-para|d=15;un=5
Castanha de caju|570|18.5|29.1|46.3|T|castanha de caju;castanha|d=30;un=2;pun=30
Amêndoas|579|21.2|21.6|49.9|U|amendoa;amendoas|d=30;pun=28
Nozes|654|15.2|13.7|65.2|U|noz;nozes|d=30;un=4;pun=30
Avelã|628|15|16.7|60.8|U|avela|d=30;pun=30
Pistache|562|20.2|27.2|45.3|U|pistache|d=30;pun=30
Macadâmia|718|7.9|13.8|75.8|U|macadamia|d=30;pun=30
Chia (semente)|486|16.5|42.1|30.7|U|chia|d=12;cs=12
Linhaça|534|18.3|28.9|42.2|U|linhaca|d=10;cs=10
Semente de girassol|584|20.8|20|51.5|U|girassol|d=10;cs=10
Semente de abóbora|559|30.2|10.7|49|U|semente de abobora|d=10;cs=10
Gergelim|573|17.7|23.5|49.7|U|gergelim|d=9;cs=9
Azeite de oliva|884|0|0|100|T|azeite;azeite de oliva|d=13;cs=13;cc=4;fio=5
Óleo de soja|884|0|0|100|T|oleo;oleo de soja;oleo de cozinha|d=13;cs=13;cc=4
Óleo de coco|862|0|0|99.1|R|oleo de coco|d=13;cs=13;cc=4
Maionese|302|0.6|8.4|30.3|T|maionese|d=15;cs=15

# Doces, açúcares e sobremesas
Açúcar refinado|387|0|99.9|0|T|acucar|d=10;cs=15;cc=5
Açúcar mascavo|369|0.8|94|0|T|acucar mascavo;rapadura|d=10;cs=15;cc=5
Mel|309|0.4|84|0|T|mel|d=21;cs=21;cc=7
Chocolate ao leite|540|7.2|59.6|30.3|T|chocolate;chocolate ao leite|d=25;un=25
Chocolate meio amargo|475|4.9|62.4|29.9|T|chocolate meio amargo|d=25;un=25
Chocolate 70% cacau|598|7.8|45.9|42.6|U|chocolate amargo;chocolate 70|d=25;un=25
Chocolate branco|539|5.9|59|32|U|chocolate branco|d=25;un=25
Bombom|500|4.5|58|28|R|bombom;sonho de valsa;ouro branco;bombom recheado|d=20;un=20
Brigadeiro|410|4|58|17|C|brigadeiro;beijinho|d=20;un=20
Doce de leite|306|5.5|59|6.8|T|doce de leite|d=20;cs=20
Goiabada|286|0.4|77|0|T|goiabada;doce de goiaba|d=30;fat=30
Geleia de frutas|260|0.4|65|0|R|geleia;geleia de frutas|d=20;cs=20
Paçoca|487|16|52.4|26.1|T|pacoca|d=20;un=20
Pé de moleque|503|14|58|25|R|pe de moleque|d=30;un=30
Bala/caramelo|390|0|97|1|R|bala;balas;caramelo|d=4;un=4
Gelatina pronta|62|1.2|14|0|R|gelatina|d=120;un=120
Pudim de leite|228|5.2|34|8|C|pudim|d=100;fat=100
Arroz-doce|150|2.5|28|3|C|arroz doce|d=100
Churros|340|4|40|18|R|churros|d=60;un=60
Bolo simples|360|6|57|12|T|bolo;bolo simples;bolo de fuba;bolo de laranja|d=60;fat=60
Bolo de chocolate (com cobertura)|410|6.2|60|16.5|T|bolo de chocolate|d=80;fat=80
Bolo de cenoura com cobertura|390|5|55|17|C|bolo de cenoura|d=80;fat=80
Brownie|466|5|52|27|R|brownie|d=60;un=60
Cookie com gotas de chocolate|488|5|65|23|R|cookie;cookies|d=30;un=30
Donut (rosquinha glaceada)|420|5|50|22|R|donut;rosquinha|d=60;un=60
Panqueca (massa simples)|190|6|27|6|C|panqueca|d=60;un=60
Creme de avelã com cacau|539|6|57|31|R|nutella;creme de avela|d=15;cs=15
Achocolatado em pó|401|4.2|91.2|2.2|T|nescau;achocolatado;toddy|d=15;cs=15;cc=5
Cacau em pó (100%)|228|19.6|57.9|13.7|U|cacau;cacau em po|d=7;cs=7

# Suplementos
Whey protein (pó)|400|78|8|6|R|whey;whey protein;proteina em po|d=30;sc=30
Albumina (pó)|340|80|2|0.5|R|albumina|d=30;sc=30
Hipercalórico (pó)|380|10|80|3|R|hipercalorico;mass gainer|d=100;sc=100
Barra de proteína|360|35|35|10|R|barra de proteina;protein bar;barra proteica|d=50;un=50

# Bebidas
Café (sem açúcar)|2|0.1|0.3|0|T|cafe;cafezinho;cafe preto|d=50;xic=50;cp=200
Chá (sem açúcar)|1|0|0.3|0|T|cha;cha de camomila;cha mate|d=200;cp=200;xic=200
Refrigerante cola|42|0|10.6|0|T|coca;coca cola;refrigerante;refri|d=350;lat=350;cp=200;gf=600
Refrigerante guaraná|39|0|9.9|0|T|guarana;guarana antartica|d=350;lat=350;cp=200;gf=600
Refrigerante zero|1|0|0.2|0|R|coca zero;refrigerante diet;refrigerante zero;refri zero|d=350;lat=350;cp=200;gf=600
Suco néctar (caixinha)|50|0.1|12.3|0|R|suco de caixinha;suco industrializado;nectar|d=200;un=200;cp=200
Suco em pó (preparado com açúcar)|45|0|11|0|R|tang;suco em po|d=200;cp=200
Cerveja|41|0.6|3.6|0|T|cerveja;chopp;chope|d=350;lat=350;gf=600;cp=300
Vinho tinto|85|0.1|2.6|0|T|vinho;vinho tinto|d=150;taca=150
Destilado (vodka/cachaça/whisky)|231|0|0|0|U|vodka;cachaca;whisky;pinga;gin;tequila|d=50;dose=50
Caipirinha|110|0|10|0|R|caipirinha;caipiroska|d=300;un=300
Energético|45|0|11|0|R|red bull;energetico;monster|d=250;lat=250
Isotônico|24|0|6|0|R|gatorade;isotonico;powerade|d=500;gf=500
Água|0|0|0|0|T|agua|d=200;cp=200;gf=500

# Pratos, lanches e salgados
Pizza de mussarela|267|11|33|10|T|pizza;pizza de queijo|d=100;fat=100
Pizza de calabresa|280|11|31|12|R|pizza de calabresa|d=100;fat=100
Pizza congelada|250|10|32|9|R|pizza congelada|d=100;fat=100
Lasanha à bolonhesa|150|9|14|6|C|lasanha|d=250
Macarrão à bolonhesa|150|7|20|4|C|espaguete a bolonhesa;macarrao com carne|d=200;pt=250
Macarrão ao molho de tomate|125|4|23|2|C|macarrao ao sugo;macarrao ao molho|d=200;pt=250
Risoto|150|4|24|4|C|risoto|d=200
Yakisoba|150|7|20|4.5|C|yakisoba|d=300
Hambúrguer fast-food (sanduíche)|260|13|24|13|R|x-burger;x-salada;big mac;sanduiche de hamburguer;lanche|d=200;un=200
Cheeseburger|270|14|25|13|R|cheeseburger|d=120;un=120
Hambúrguer vegetal|190|17|10|9|R|hamburguer vegetal;hamburguer de soja|d=90;un=90
Cachorro-quente|250|9|23|13|R|cachorro quente;hot dog completo|d=160;un=160
Misto-quente|300|13|28|15|C|misto quente;misto|d=120;un=120
Coxinha de frango (frita)|280|9|30|13|R|coxinha|d=80;un=80
Pastel frito de carne|330|10|32|18|R|pastel;pastel de carne|d=100;un=100
Pastel frito de queijo|340|11|31|19|R|pastel de queijo|d=100;un=100
Empada de frango|333|8|35|18|R|empada;empadinha|d=60;un=60
Esfiha de carne|250|10|30|9|R|esfiha;esfirra|d=90;un=90
Quibe frito|245|12|22|12|R|quibe;kibe|d=60;un=60
Bolinho de bacalhau|240|10|24|11|R|bolinho de bacalhau|d=40;un=40
Salgadinho de milho (tipo Cheetos)|520|6|56|30|R|cheetos;salgadinho;doritos;ruffles|d=40;pct=50
Batata chips|536|6.6|53|34.6|U|chips;batata chips;pringles|d=30;pct=40
Salpicão de frango|190|9|10|13|C|salpicao|d=100
Salada de maionese|150|2|13|10|C|maionese de batata;salada de maionese;maionese de legumes|d=100;cs=40
Farofa temperada|400|3|66|13|C|farofa|d=30;cs=20
Escondidinho de carne|160|8|17|7|C|escondidinho|d=250
Baião de dois|170|7|23|5|C|baiao de dois|d=200
Sopa de legumes|45|2|8|0.7|C|sopa|d=300
Caldo verde|70|3|8|3|C|caldo verde|d=300
Canja de galinha|60|4|7|1.5|C|canja|d=300
`;
