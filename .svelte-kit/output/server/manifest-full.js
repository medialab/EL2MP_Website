export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "EL2MP/_app",
	assets: new Set([".DS_Store","PDF/Benchmarking.pdf","PDF/Ekhprasis.pdf","PDF/InnovationStrategies.pdf","PDF/Qualifying.pdf","fonts/.DS_Store","fonts/InstrumentSans-Regular.ttf","fonts/InstrumentSerif-Regular.ttf","global_db.json","og_images/favicon.ico","og_images/favicon.jpg","og_images/opengraph.jpg","styles/styles.css","styles/variables.css"]),
	mimeTypes: {".pdf":"application/pdf",".ttf":"font/ttf",".json":"application/json",".jpg":"image/jpeg",".css":"text/css",".avif":"image/avif",".webp":"image/webp",".jpeg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b0Gc56Rh.js","app":"_app/immutable/entry/app.qUVHk7bl.js","imports":["_app/immutable/entry/start.b0Gc56Rh.js","_app/immutable/chunks/entry.CH0WLzM2.js","_app/immutable/chunks/runtime.CPZqnB3O.js","_app/immutable/chunks/index-client.CgKQl7V3.js","_app/immutable/entry/app.qUVHk7bl.js","_app/immutable/chunks/preload-helper.BKSAkrqI.js","_app/immutable/chunks/runtime.CPZqnB3O.js","_app/immutable/chunks/render.ClV9nQy9.js","_app/immutable/chunks/disclose-version.yRUqBdr1.js","_app/immutable/chunks/index-client.CgKQl7V3.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/img1.DB1WrWcd.avif":95921,"_app/immutable/assets/img1.DwgMpDkg.avif":233647,"_app/immutable/assets/img1.fGjxAbni.webp":249418,"_app/immutable/assets/img1.B_mHLV4o.webp":604222,"_app/immutable/assets/img1.Dr1t1NR2.jpeg":458382,"_app/immutable/assets/img1.TQ_a5uLV.jpeg":923905,"_app/immutable/assets/img2.Dg0eNK3q.avif":190591,"_app/immutable/assets/img2.DNaBV4kt.avif":462647,"_app/immutable/assets/img2.s89m8U1Q.webp":431460,"_app/immutable/assets/img2.Bih4voAP.webp":959918,"_app/immutable/assets/img2.CIF7cWqY.jpeg":650425,"_app/immutable/assets/img2.QlEXNCKQ.jpeg":1126383,"_app/immutable/assets/img3.DAcAMwUO.avif":35666,"_app/immutable/assets/img3.DKRjOWZu.avif":80351,"_app/immutable/assets/img3.CrL67P_z.webp":96414,"_app/immutable/assets/img3.cCbLVC8j.webp":290534,"_app/immutable/assets/img3.Dw5GzWUA.jpeg":235545,"_app/immutable/assets/img3.S3A-o23P.jpeg":756092,"_app/immutable/assets/img4.BdpsYb_5.avif":36060,"_app/immutable/assets/img4.C1JPF0Sz.avif":91504,"_app/immutable/assets/img4.BFb0Y3Go.webp":109792,"_app/immutable/assets/img4.DRMf60Pk.webp":350894,"_app/immutable/assets/img4.C7yMdn7o.jpeg":280969,"_app/immutable/assets/img4.DS9EWmuv.jpeg":664337,"_app/immutable/assets/img5.CwMjKd24.avif":116546,"_app/immutable/assets/img5.DJXC-8TR.avif":280169,"_app/immutable/assets/img5.CVE6Jd3K.webp":277878,"_app/immutable/assets/img5.CJGUg6Yd.webp":683458,"_app/immutable/assets/img5.1IMO8yRp.jpeg":530739,"_app/immutable/assets/img5.FbG9S_Lv.jpeg":1031564,"_app/immutable/assets/img6.B3GQC8Cg.avif":94220,"_app/immutable/assets/img6.C_rKMPaD.avif":231248,"_app/immutable/assets/img6.D93WMUM5.webp":202642,"_app/immutable/assets/img6.D6Ydhm_V.webp":527996,"_app/immutable/assets/img6.BqszNBh6.jpeg":353916,"_app/immutable/assets/img6.DII5ae4F.jpeg":782190,"_app/immutable/assets/img7.CStKRNcv.avif":99128,"_app/immutable/assets/img7.Px_JDcgt.avif":279124,"_app/immutable/assets/img7.o8LguTa3.webp":259012,"_app/immutable/assets/img7.Q5jmzP8A.webp":673454,"_app/immutable/assets/img7.C6XebAgv.jpeg":453930,"_app/immutable/assets/img7.Ba_ijbl9.jpeg":905412,"_app/immutable/assets/img8.CZyFTEZZ.avif":61347,"_app/immutable/assets/img8.mIUVSvdv.avif":159476,"_app/immutable/assets/img8.CpXdK72E.webp":170362,"_app/immutable/assets/img8.Tzy38bwP.webp":477974,"_app/immutable/assets/img8.BZADjHmi.jpeg":338840,"_app/immutable/assets/img8.D51aghVx.jpeg":753417,"_app/immutable/assets/img9.kHScFfBP.avif":50164,"_app/immutable/assets/img9.DXPv9Vxw.avif":136625,"_app/immutable/assets/img9.CnN3azU5.webp":149088,"_app/immutable/assets/img9.De4BGNqG.webp":444622,"_app/immutable/assets/img9.DJ7Laxix.jpeg":320002,"_app/immutable/assets/img9.CCEavNGe.jpeg":723376,"_app/immutable/assets/img10.CUMnRAjq.avif":89861,"_app/immutable/assets/img10.BgC0ysl9.avif":261331,"_app/immutable/assets/img10.s01Moy65.webp":231642,"_app/immutable/assets/img10.ABjY3_Iv.webp":642188,"_app/immutable/assets/img10.CgupggWs.jpeg":439495,"_app/immutable/assets/img10.MNhmzOV4.jpeg":879341,"_app/immutable/assets/img11.uSkt7V-R.avif":140535,"_app/immutable/assets/img11.CYXnCQsn.avif":220176,"_app/immutable/assets/img11.BF8FAJqT.webp":271518,"_app/immutable/assets/img11.gYcLb7qc.webp":599744,"_app/immutable/assets/img11.CqXhWRZo.jpeg":539359,"_app/immutable/assets/img11.BLK1kI90.jpeg":940139,"_app/immutable/assets/img12.BW6_dEfc.avif":90215,"_app/immutable/assets/img12.COQ5X3dN.avif":226041,"_app/immutable/assets/img12.AKYhUTPk.webp":200412,"_app/immutable/assets/img12.Bye_mEwz.webp":580986,"_app/immutable/assets/img12.f5Kvm2--.jpeg":399388,"_app/immutable/assets/img12.DEHF1DmX.jpeg":938995,"_app/immutable/assets/img13.DC-zIH8R.avif":71044,"_app/immutable/assets/img13.DQge5Ldh.avif":180601,"_app/immutable/assets/img13.s1PORwBj.webp":188846,"_app/immutable/assets/img13.BZweUxSJ.webp":532276,"_app/immutable/assets/img13.KQ0lzY62.jpeg":377360,"_app/immutable/assets/img13.Cz8mYVx-.jpeg":869401,"_app/immutable/assets/img14.1yMbH2Ki.avif":221600,"_app/immutable/assets/img14.DVjbrmWW.avif":567367,"_app/immutable/assets/img14.Z8aUBe3l.webp":495506,"_app/immutable/assets/img14.BFJsaXwg.webp":1047338,"_app/immutable/assets/img14.DoK2qpqP.jpeg":712644,"_app/immutable/assets/img14.Bs5v_CqD.jpeg":1147052,"_app/immutable/assets/img15.CDApgV4n.avif":55713,"_app/immutable/assets/img15.Cq64g5lU.avif":138448,"_app/immutable/assets/img15.BzUAPpZ7.webp":161134,"_app/immutable/assets/img15.aBLEFQj3.webp":516604,"_app/immutable/assets/img15.CUKCoY7x.jpeg":364008,"_app/immutable/assets/img15.vMFbw2qv.jpeg":877721,"_app/immutable/assets/img16.B5zSL8iX.avif":66742,"_app/immutable/assets/img16.Bbum79Vb.avif":165490,"_app/immutable/assets/img16.DddVHBUU.webp":185212,"_app/immutable/assets/img16.DwGS9Ifg.webp":595884,"_app/immutable/assets/img16.D9k5SOFz.jpeg":392414,"_app/immutable/assets/img16.EkNCUklw.jpeg":944966,"_app/immutable/assets/img17.wl_Xqto1.avif":128342,"_app/immutable/assets/img17.Cr7uBQJq.avif":322566,"_app/immutable/assets/img17.BqBdcjJw.webp":310326,"_app/immutable/assets/img17.CcG-NPh-.webp":811112,"_app/immutable/assets/img17.Bntq6L4C.jpeg":540209,"_app/immutable/assets/img17.BMLFEk4Q.jpeg":1137727,"_app/immutable/assets/img18.CPXiSl4b.avif":139567,"_app/immutable/assets/img18.DIEA3gRM.avif":401271,"_app/immutable/assets/img18.BzFRAu5l.webp":394778,"_app/immutable/assets/img18.bEMQ-Pm6.webp":927146,"_app/immutable/assets/img18.DoVFuo3F.jpeg":673956,"_app/immutable/assets/img18.BWxwobCw.jpeg":1137171,"_app/immutable/assets/img19.BCpfoXVG.avif":76504,"_app/immutable/assets/img19.D3muVmKw.avif":217390,"_app/immutable/assets/img19.D1Sy1JP-.webp":258800,"_app/immutable/assets/img19.BHRQHX6M.webp":715462,"_app/immutable/assets/img19.B-iK4VNm.jpeg":498358,"_app/immutable/assets/img19.DP92D4S-.jpeg":988842,"_app/immutable/assets/img20.KS1w7Qyc.avif":170314,"_app/immutable/assets/img20.BJVE4d6G.avif":469138,"_app/immutable/assets/img20.CaCUi9Vo.webp":470136,"_app/immutable/assets/img20.t1nba1oo.webp":1028250,"_app/immutable/assets/img20.BOBcxo3r.jpeg":702583,"_app/immutable/assets/img20.BzmeDXRA.jpeg":1204203,"_app/immutable/assets/img21.CUefvncG.avif":102778,"_app/immutable/assets/img21.Nfh7bMbM.avif":266460,"_app/immutable/assets/img21.DOImXydm.webp":275290,"_app/immutable/assets/img21.DLB_om-W.webp":699028,"_app/immutable/assets/img21.Brj336Z5.jpeg":506502,"_app/immutable/assets/img21.JIhPZn1_.jpeg":987661,"_app/immutable/assets/qualifying.Bsx1BcQS.avif":22850,"_app/immutable/assets/qualifying.CwK9b5U8.avif":174218,"_app/immutable/assets/qualifying.k8RAWrh3.webp":51652,"_app/immutable/assets/qualifying.xyV88Pxw.webp":292286,"_app/immutable/assets/qualifying.DbZTSVnW.jpeg":49539,"_app/immutable/assets/qualifying.Dlmd4Baz.jpeg":292932,"_app/immutable/assets/CIRCLE.DnMg9Kjx.svg":13476,"_app/immutable/assets/enhanced_logoImage.BVKc8-Qg.avif":17701,"_app/immutable/assets/enhanced_logoImage.Qfmesbrl.avif":33562,"_app/immutable/assets/enhanced_logoImage.Cbf4PYtl.webp":37350,"_app/immutable/assets/enhanced_logoImage.JrAXU7cP.webp":85268,"_app/immutable/assets/enhanced_logoImage.D_eIIOoz.png":136164,"_app/immutable/assets/enhanced_logoImage.Cvtx-yvb.png":173456,"_app/immutable/assets/logo_condensed.Cwwx0yWm.svg":5602,"_app/immutable/assets/logo_complete.SEqfJBG_.svg":33101,"_app/immutable/assets/Dot_background.BMWCEQP3.avif":94500,"_app/immutable/assets/Dot_background.BqYuFsFf.avif":4669,"_app/immutable/assets/Dot_background.BF15mkJt.webp":63562,"_app/immutable/assets/Dot_background.C7u_RcRU.webp":46928,"_app/immutable/assets/Dot_background.B3sYNgA-.png":13962,"_app/immutable/assets/Dot_background.CvoK4E8a.png":22257}
	}
}
})();
