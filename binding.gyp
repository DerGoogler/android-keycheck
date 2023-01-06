{
    "targets": [
        {
            "target_name": "__native_keycheck",
            "include_dirs": [
                "<!(sh -c \"echo \$PREFIX/include\")",
                "<!(node -p \"require('node-addon-api').include\")"
            ],
            "sources": [
                "keycheck.c"
            ],
            "defines": [
                "NAPI_DISABLE_CPP_EXCEPTIONS"
            ]
        }
    ]
}