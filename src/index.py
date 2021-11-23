import sys

import js

div = js.document.createElement("div")
div.innerHTML = "<h1>This element was created from Python</h1>"
js.document.body.prepend(div)


# logstash_dir = r"D:\Software\ELK\logstash-7.15.2"
# elastic_dir = r"D:\Software\ELK\elasticsearch-7.14.0"
# fliebeat_dir = r"D:\Software\ELK\filebeat-7.15.2-windows-x86_64"
# kibana_dir = r"D:\Software\ELK\kibana-7.14.0-windows-x86_64"
# logstash_dir = r"D:\Software\ELK\logstash-7.15.2"


# def new_shell(cmd, name=None, keep=False):
#     p_name = "" if not name else f'"{name}"'
#     subprocess.call(f'start {p_name} cmd {"/k" if keep else "/c"} {cmd}', shell=True)


sys.version
print('hello!ssss')
