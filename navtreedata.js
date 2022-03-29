/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Concord - C Discord API library", "index.html", [
    [ "Concord - C Discord API library", "index.html#autotoc_md0", [
      [ "About", "index.html#autotoc_md1", [
        [ "Minimal example", "index.html#autotoc_md2", null ]
      ] ],
      [ "Build Instructions", "index.html#autotoc_md3", [
        [ "On Windows", "index.html#autotoc_md4", null ],
        [ "On Linux, BSD, and Mac OS X", "index.html#autotoc_md5", [
          [ "Ubuntu and Debian", "index.html#autotoc_md6", null ],
          [ "Void Linux", "index.html#autotoc_md7", null ],
          [ "Alpine", "index.html#autotoc_md8", null ],
          [ "FreeBSD", "index.html#autotoc_md9", null ],
          [ "OS X", "index.html#autotoc_md10", null ]
        ] ],
        [ "Setting up your environment", "index.html#autotoc_md11", [
          [ "Clone Concord into your workspace", "index.html#autotoc_md12", null ],
          [ "Compile Concord", "index.html#autotoc_md13", null ],
          [ "Special notes for non-Linux systems", "index.html#autotoc_md14", null ],
          [ "Special compilation flags", "index.html#autotoc_md15", null ]
        ] ],
        [ "Configuring Concord", "index.html#autotoc_md16", null ],
        [ "Test Copycat-Bot", "index.html#autotoc_md17", [
          [ "Get Copycat-Bot Response", "index.html#autotoc_md18", null ],
          [ "Terminate Copycat-Bot", "index.html#autotoc_md19", null ]
        ] ]
      ] ],
      [ "Installing Concord", "index.html#autotoc_md20", [
        [ "Standalone executable", "index.html#autotoc_md21", [
          [ "GCC", "index.html#autotoc_md22", null ],
          [ "Clang", "index.html#autotoc_md23", null ],
          [ "UNIX C compiler", "index.html#autotoc_md24", null ]
        ] ]
      ] ],
      [ "Recommended debuggers", "index.html#autotoc_md25", [
        [ "Valgrind", "index.html#autotoc_md26", null ],
        [ "GDB", "index.html#autotoc_md27", null ]
      ] ],
      [ "Support", "index.html#autotoc_md28", null ],
      [ "Contributing", "index.html#autotoc_md29", null ],
      [ "Getting Started", "index.html#autotoc_md30", null ],
      [ "Useful links", "index.html#autotoc_md31", null ]
    ] ],
    [ "Discord API Roadmap", "md_docs_DISCORD_ROADMAP.html", [
      [ "Reference", "md_docs_DISCORD_ROADMAP.html#autotoc_md33", [
        [ "Authentication", "md_docs_DISCORD_ROADMAP.html#autotoc_md34", null ]
      ] ],
      [ "Interactions", "md_docs_DISCORD_ROADMAP.html#autotoc_md35", [
        [ "Application Commands", "md_docs_DISCORD_ROADMAP.html#autotoc_md36", null ],
        [ "Message Components", "md_docs_DISCORD_ROADMAP.html#autotoc_md37", null ],
        [ "Receiving and Responding", "md_docs_DISCORD_ROADMAP.html#autotoc_md38", null ]
      ] ],
      [ "Resources", "md_docs_DISCORD_ROADMAP.html#autotoc_md39", [
        [ "Application", "md_docs_DISCORD_ROADMAP.html#autotoc_md40", null ],
        [ "Audit Log", "md_docs_DISCORD_ROADMAP.html#autotoc_md41", null ],
        [ "Channels", "md_docs_DISCORD_ROADMAP.html#autotoc_md42", null ],
        [ "Emoji", "md_docs_DISCORD_ROADMAP.html#autotoc_md43", null ],
        [ "Guild", "md_docs_DISCORD_ROADMAP.html#autotoc_md44", null ],
        [ "Guild Template", "md_docs_DISCORD_ROADMAP.html#autotoc_md45", null ],
        [ "Invite", "md_docs_DISCORD_ROADMAP.html#autotoc_md46", null ],
        [ "Stage Instance", "md_docs_DISCORD_ROADMAP.html#autotoc_md47", null ],
        [ "Sticker", "md_docs_DISCORD_ROADMAP.html#autotoc_md48", null ],
        [ "User", "md_docs_DISCORD_ROADMAP.html#autotoc_md49", null ],
        [ "Voice Resouce", "md_docs_DISCORD_ROADMAP.html#autotoc_md50", null ],
        [ "Webhook", "md_docs_DISCORD_ROADMAP.html#autotoc_md51", null ]
      ] ],
      [ "Topics", "md_docs_DISCORD_ROADMAP.html#autotoc_md52", [
        [ "Certified Devices", "md_docs_DISCORD_ROADMAP.html#autotoc_md53", null ],
        [ "Gateway", "md_docs_DISCORD_ROADMAP.html#autotoc_md54", null ],
        [ "OAuth2", "md_docs_DISCORD_ROADMAP.html#autotoc_md55", null ],
        [ "Opcodes and Status Codes", "md_docs_DISCORD_ROADMAP.html#autotoc_md56", null ],
        [ "Permissions", "md_docs_DISCORD_ROADMAP.html#autotoc_md57", null ],
        [ "RPC", "md_docs_DISCORD_ROADMAP.html#autotoc_md58", null ],
        [ "RateLimits", "md_docs_DISCORD_ROADMAP.html#autotoc_md59", null ],
        [ "Voice Connections", "md_docs_DISCORD_ROADMAP.html#autotoc_md60", null ]
      ] ]
    ] ],
    [ "Compiling on Windows (Detailed instructions)", "md_docs_WINDOWS.html", [
      [ "Cygwin and Dependencies", "md_docs_WINDOWS.html#autotoc_md62", null ],
      [ "Microsoft Visual C/C++", "md_docs_WINDOWS.html#autotoc_md63", null ],
      [ "Other compilers", "md_docs_WINDOWS.html#autotoc_md64", null ]
    ] ],
    [ "Todo List", "todo.html", null ],
    [ "Deprecated List", "deprecated.html", null ],
    [ "Modules", "modules.html", "modules" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"group__DiscordAPIChannel.html#ga20401e84d4ac2c3bebebea580d5c0190",
"group__DiscordEventCallbackTypes.html#gaad755d8a4839e8d62219ae7e8b04e3af",
"structdiscord.html#a56b0ad42a1f11f53cb9eedbe8ab89810",
"structdiscord__component.html#afb1967e57163487f17e4223976f19eaa",
"structdiscord__execute__webhook.html#a76b5f2ef3f98a989dd5d117ffe4b6edd",
"structdiscord__guild__template.html#a7a548896c45ec302dd0219ba17f9f840",
"structdiscord__modify__guild__scheduled__event.html#a5b5074a1799285974a76ef3d60a2c31e",
"structdiscord__ret__message.html#af033729f9d5a3a791f5df6492244c603",
"structdiscord__welcome__screen.html#a01a098c7a8e159379706baa8bff639fa"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';