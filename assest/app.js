new Vue({
    el: "#app",

	data: {
		title: 'VueJS Tips',
		twitter: "@larry_sigo",
		tipsLeft: 5,
		theTip: '',
		theCode: ''
	},

    methods: {
        getRandomTip: function() {
            var tipsCount = tipsData.length
             var rand = Math.floor((Math.random()*(tipsCount-1))+ 1)
            return tipsData[rand]
        },
        showNextTip:function() {
			if (this.tipsLeft > 0) {
				var tip = this.getRandomTip()
				this.theTip = tip.tip
				this.theCode = tip.code
				--this.tipsLeft
			}
        }
    },

	mounted: function() {
        this.showNextTip()
    }
});