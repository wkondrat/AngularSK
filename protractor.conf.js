exports.config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:9000/',

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    },

    specs: ['e2e/dialogCommunication.e2e-spec.js',
            'e2e/modal-dialog.e2e-spec.js',
            'e2e/dialog-d.e2e-spec.js'
        ]
};
