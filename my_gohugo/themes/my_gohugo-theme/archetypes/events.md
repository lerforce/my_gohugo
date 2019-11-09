---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
type: "events"
description: ""
address: ""
postalCode: "75000"
city: "Paris"
label: ""
photos: ["", "", "", "", ""]
draft: true
important: false
association: ""
when: {{ dateFormat "2006-01-02" .Date }}
---