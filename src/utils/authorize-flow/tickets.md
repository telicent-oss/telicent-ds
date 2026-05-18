I've been given an oauth server and rough js client that has been vibe coded.
We will use it,and it wil be made open source for others to use.

 I've derisked it in a "SPIKE" but I need tickets

This is the map of the work


SPIKE-DEBT

Backlog
-------

- remind to add to postgres, incidental print
- better demo output to explain the initial failure

## Phasse: MVP

Auth server
*   [p0] get everything working again
*   rename "spa" to demo everywhere
    *   [discussion](https://github.com/Telicent-io/auth-server/pull/31#discussion_r2387135096)
*   Bug: SQL is not idempotent or something
    *   [discussion](https://github.com/Telicent-io/auth-server/pull/31#discussion_r2402462426)
        

Auth client
*   **Theme** Features
    *   @telicent-oss/fe-auth-lib
        *   Tests
    *   @telicent-oss/ds candidate-package authorize-flow:
        *   [p0] replace `/whoami`
        *   [p0] Feature flag for new OAuth flow
        *   sync api.instance.get doens't resolve until after AuthModal resolves
        *   Tests
    *   Apps
        *   [p1] integrate into all apps behind feature flag w/Tests
    *   selenium test suite
            

## Phase internal deployment

Auth client
*   **Theme** Features
    *   @telicent-oss/ds candidate-package authorize-flow:
        *   sync api.instance.get doens't resolve until after AuthModal resolves
        *   Tests
        *   Story; LoginCurrentWindow
    *   Apps
        *   integrate into all apps behind feature flag w/Tests
    *   selenium test suite
        *   with broad matrix of browsers
            
*   **Theme** Refactor for internal developer needs
    *   fe-auth-lib to frontend monorepo
    *   Rename: AuthServerOAuth2Client to AuthClient
        *   Rationale:
            *   Its implementation agnostic
            *   it should not live with


## Phase: target external / open source

*   **Theme** External developer requirements
    *   Setup developer flows flow
        *   How:
            *   Springboot profile that has a demo app
            *   docs
            *   ./dev refactor
    *   Create @telicent-oss/fe-auth-lib/examples
        *   How:
            *   Move useful fe examples form auth-server
            *   Delete useless ones
    *   Auth Client - Convert from JS to TS
        *   Delete def file (AI-generated)
        *   convert to a TS package
        *   I tried to do it quickly, turned into a huge mess.
    *   Client responsibility
        *   Problem:
            *   During spike, code suffered from competing responsibilities between client/ds/app
        *   Engineering notes:
            *   Google - just does auth, no more
            *   Auth0 - does a little more, in that it closes auth popups
        *   Solution:
            *   Get consensus on responsibility guidance
            *   Document guidance
            *   Ensure code adheres to guidance
                *   Update client
                *   Update client utils e.g. setupOAuthEventListeners
                *   Create "pattern" examples e.g. fe apps & storybook integration into authorize-flow




Out ticket template
```
# Summary

Short, imperative

# Description

## Background:

Why we need it, user pain, links to designs or mocks

## Objective:

What success looks like

# Acceptance criteria

Criterion 1

Criterion 2

# Engineering notes [optional]
…

# Proposed Solution  [optional]

p0-level approach, links to ADRs or RFCs
```
Create the tickets
