# COLORS
RED    := $(shell tput -Txterm setaf 1)
GREEN  := $(shell tput -Txterm setaf 2)
YELLOW := $(shell tput -Txterm setaf 3)
BLUE   := $(shell tput -Txterm setaf 4)
WHITE  := $(shell tput -Txterm setaf 7)
RESET  := $(shell tput -Txterm sgr0)

HELP_FUNC = \
    %help; \
    while(<>) { \
        if(/^([a-z0-9_-]+):.*\#\#(?:@([\w-]+))?\s(.*)$$/) { \
            push(@{$$help{$$2}}, [$$1, $$3]); \
        } \
    }; \
    print "\n${RED}Usage :${RESET} make ${BLUE}<${YELLOW}target${BLUE}>${RESET} \n\n"; \
    for ( sort keys %help ) { \
        print "${WHITE}$$_:${RESET}\n"; \
        printf("  ${YELLOW}%-30s${RESET} ${GREEN}%s${RESET}\n", $$_->[0], $$_->[1]) for @{$$help{$$_}}; \
        print "\n"; \
    }

help:
	@perl -e '$(HELP_FUNC)' $(MAKEFILE_LIST)

currentBranch = $$(git rev-parse --abbrev-ref HEAD)

install: ##@install Install client and www
	npm i
	make setup-config
	cd client && npm i && cd ..
	cd www && npm i && cd ..
	make client-copy-env
	make generate-css-vars
start-client: ##@start Start client app server
	cd client && npm run dev
start-api: ##@start Start API server
	cd www && npm run dev
setup-config: ##@install copy dist config files to config.json
	cd client && cp src/config.json.dist src/config.json && cd ..
	cd www && cp src/config.json.dist src/config.json && cd ..
	make client-copy-env
generate-css-vars: ##@install generate css in js variables
	cd client && npm run generate:css-json
client-copy-env: ##@install copy env dist variables to .env
	cp client/.env.dist client/.env
