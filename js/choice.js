const hearts = {
  narmalHeart:['❤️','🧡','🖤','🩷','🩵','🩶','💙','💚','💛','💜'],

  specialHeart:['💗','💕','💖','❤️‍🔥','💓','💝','💞','💟']
}

const feelings = {
	happy:['😄','😆','☺️','😊','🤭','🤪','🥳','😜'],

	sad:['😣','☹️','😔','😞','🙁','🥺'],

	cry:['😭','😢','🥹'],

	angry:['😠','😡','😤'],

	others:['🤔️','🥰','😉','😇','🤩','🤯']
	
}

function choices(start=false){
	if (start==true){
		let rand = randint(0,5);

		let p1, p2, p3, p4, p5;

		if (rand == 0){
			let c1 = hearts['normalHeart'];
			let p2 = hearts['specialHeart'];
			let p3 = randint('hearts');

			p1 = c1[randint(0,c1.length-1)];
			p2 = c2[randint(0,c2.length-1)];
			p3 = c3[randint(0,c3.length-1)];
			

			if(p3 == p1 || p3 == p2){
				p3 = c3[randint(0,c3.length-1)];
			}
		}
		if(rand == 1){
			let question = `${p1} <b>x</b> ${p2} <b>${sign}</b> ${p3}`;
			let c1 = feelings['happy'];
			let c2 = feelings['sad'];
			let c3 = feelings['cry'];
			let c4 = feelings['angry'];
			let c5 = feelings['others'];

			p1 = c1[randint(0,c1.length-1)];
			p2 = c2[randint(0,c2.length-1)];
			p3 = c3[randint(0,c3.length-1)];
			p4 = c4[randint(0,c4.length-1)];
			p5 = c5[randint(0,c5.length-1)];
		}
		// if(rand == 2){

		// }
		// else {
		// 	var ans = p1*p2-p3;
		// 	var sign = "-";
		// }
		let question = `${p1} <b>x</b> ${p2} <b>${sign}</b> ${p3}`;
		let html = `
		<br>
		Answer the following question : <br><br>
		<h3>${question}</h3>
		<br><br>
		`;
		Swal.fire({
			heightAuto:false,
			icon:"question",
			title:"Test In Process",
			html:html,
			confirmButtonText:"Submit",
			allowOutsideClick:false,
			input:"text",
			timer:6000,
			timerProgressBar:true,

			inputValidator: (answer) => {
				if (answer == ans){
					studentTestResult('pass');
				}
				else {
					studentTestResult('fail');
				}
			}
		}).then((result) => {
			if (result.dismiss == Swal.DismissReason.timer){
				studentTestResult("fail");
			};
		});
	}
	else {
		let html=`<br><br>
		
		You will have <b>6</b> seconds to answer the question.<br>
		You will need to answer the question correctly to pass the test.
		
		<br><br>`;

		Swal.fire({
			heightAuto:false,
			icon:"info",
			title:"College Test",
			html:html,
			confirmButtonText:"Take the Test",
			showCancelButton:true,
			cancelButtonText:"Don't care",
			allowOutsideClick:false

		}).then((result)=> {
			if (result.value){
				message(`You took the college test`);
				studentTest(true);
			}
			else if (result.dismiss == Swal.DismissReason.cancel){
				message(`You ignored a college test and failed in it`);
				intellect -= randint(2,3);
				studentTestResult("fail");

			}
		});
	};
};