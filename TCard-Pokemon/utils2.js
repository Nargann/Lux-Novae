function showBtnTCardHelper() {
    //console.log(window.location.origin);
    try {
        var mainPosts = document.getElementsByClassName('main-post');
  
        for (let i = 0; i < mainPosts.length; i++) {
          var tcardDiv = mainPosts[i].children[1].getElementsByTagName('div')[2];
          var buttonTcardHelper = mainPosts[i].children[0].children[1].children[3];

          if (tcardDiv) {
            if (tcardDiv.id == "tcardId") {
                buttonTcardHelper.style.visibility = 'visible';
                buttonTcardHelper.style.display = 'block';
            } else if (tcardDiv.id == "tcardId-pokemon") {
              buttonTcardHelper.setAttribute("onclick","redirectToTCardPokemon()");
              buttonTcardHelper.style.visibility = 'visible';
              buttonTcardHelper.style.display = 'block';
            } else {
                buttonTcardHelper.style.visibility = 'hidden';
                buttonTcardHelper.style.display = 'none';
            }
          } else {
              buttonTcardHelper.style.visibility = 'hidden';
              buttonTcardHelper.style.display = 'none';                        
          }
        }
    } catch (e) {
        console.log("Error in showBtnTCardHelper : " + e);
    }
  }
  
  function checkPNJPost() {
    try {
      var PNJ_ids = "gmid	mihailid	eveid	iovid	zoroid	rowenaid	cohenid	williamid	laviniaid	keiganid	anatoleid	narganid	naseemid	altheaid	nallaid	benid	maudid	phillipid	coleid	erinid	claraid	solangeid	ahsokaid	adrianaid	constanceid	lohanid	basileid	cassiusid	knightid	liyuid	benedictid	edwardid	kyraid	sebid	isanaid	javierid	masaoid	adrielid	gemmaid";
      var PNJ_names = "grand maître	mihail puskÁs	eve isley	iov popov	zoro ark	rowena maeston	cohen parry	william maeston	lavinia maeston	keigan maeston	anatole chabert	nate nargan	naseem laham	althea graves	nalla kavik	benjamin hart	maud besnard	phillip thomas	cole henderson	erin paim	clara figueirdo	solange naudé	ahsoka farran	adriana marques	constance hart	lohan osceola	basile dufresne	cassius reid	kn16h7	feng li hua	benedict dale	edward silverlake	kyra bazzano	sebastian bonnett	isana evans	javier pacheco	masao yu	adriel lÌosach	gemma malone";
      var PNJ_imgs = "https://i.servimg.com/u/f12/20/00/53/33/grandm10.png	https://i.servimg.com/u/f12/20/00/53/33/mihail10.png	https://i.servimg.com/u/f12/20/00/53/33/eveisl10.png	https://i.servimg.com/u/f12/20/00/53/33/iovpop10.png	https://i.servimg.com/u/f12/20/00/53/33/zoro_a10.png	https://i.servimg.com/u/f12/20/00/53/33/rowena10.png	https://i.servimg.com/u/f12/20/00/53/33/cohenp10.png	https://i.servimg.com/u/f12/20/00/53/33/willia10.png	https://i.servimg.com/u/f12/20/00/53/33/lavini10.png	https://i.servimg.com/u/f12/20/00/53/33/keigan10.png	https://i.servimg.com/u/f12/20/00/53/33/anatol10.png	https://i.servimg.com/u/f84/12/49/78/99/nate_n11.png	https://i.servimg.com/u/f84/12/49/78/99/naseem10.png	https://i.servimg.com/u/f12/20/00/53/33/althea10.png	https://i.servimg.com/u/f12/20/00/53/33/nallak10.png	https://i.servimg.com/u/f12/20/00/53/33/benjam10.png	https://i.servimg.com/u/f12/20/00/53/33/maudbe10.png	https://i.servimg.com/u/f12/20/00/53/33/philli10.png	https://i.servimg.com/u/f12/20/00/53/33/cole_h10.png	https://i.servimg.com/u/f12/20/00/53/33/erin_p10.png	https://i.servimg.com/u/f12/20/00/53/33/clara_10.png	https://i.servimg.com/u/f12/20/00/53/33/solang10.png	https://i.servimg.com/u/f12/20/00/53/33/ahsoka10.png	https://i.servimg.com/u/f12/20/00/53/33/adrian10.png	https://i.servimg.com/u/f12/20/00/53/33/consta10.png	https://i.servimg.com/u/f12/20/00/53/33/lohan_10.png	https://i.servimg.com/u/f12/20/00/53/33/basile10.png	https://i.servimg.com/u/f12/20/00/53/33/cassiu10.png	https://i.servimg.com/u/f12/20/00/53/33/kn16h710.png	https://i.servimg.com/u/f12/20/00/53/33/fengli10.png	https://i.servimg.com/u/f12/20/00/53/33/benedi10.png	https://i.servimg.com/u/f12/20/00/53/33/edward10.png	https://i.servimg.com/u/f12/20/00/53/33/kyraba10.png	https://i.servimg.com/u/f12/20/00/53/33/sebast10.png	https://i.servimg.com/u/f12/20/00/53/33/isana_10.png	https://i.servimg.com/u/f40/18/51/38/10/mdr10.png	https://i.servimg.com/u/f40/18/51/38/10/mdr10.png	https://i.servimg.com/u/f17/20/17/43/49/adriel10.png	https://i.servimg.com/u/f40/18/51/38/10/mdr10.png";		
      PNJ_ids = PNJ_ids.split("\t");
      PNJ_names = PNJ_names.split("\t");
      PNJ_imgs = PNJ_imgs.split("\t");
  
      //console.log(" ids " + PNJ_ids.length);
      //console.log(" names " + PNJ_names.length);
      //console.log(" imgs " + PNJ_imgs.length);
  
      for (var j = 0; j < PNJ_ids.length; j++) {
              var PNJ_id = PNJ_ids[j];
              var idElement = document.getElementsByClassName(PNJ_id);
              //console.log("nbe de post de  : " + PNJ_id + " = " + idElement.length);
  
              if (idElement) {
                      for (let i = 0; i < idElement.length; i++) {
                              
                              // Changer l'image
                              var closestMainPost = idElement[i].closest('.main-post');
                              var PNJProfileIMG = closestMainPost.previousElementSibling.children[0].children[0].children[0].children[0];
                              PNJProfileIMG.src = PNJ_imgs[j];
  
                              // Changer le nom
                              var closestPostContainer = idElement[i].closest('.post-container');
                              var PNJProfileName = closestPostContainer.previousElementSibling.children[0].children[0].children[0].children[0].children[0];
                              console.log("Close = " + PNJProfileName.tagName);
                              PNJProfileName.textContent = PNJ_names[j];
  
                      }  
              }
  
      }
  
  
    } catch (e) {
            console.log("Error : " + e);
    }
  }