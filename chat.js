const projectstab = document.getElementById('projects_tab')
const chattab = document.getElementById('chat_tab')
const linkstab = document.getElementById('links_tab')

var tab = 0

tabupdate()

function tabupdate() {
    if(tab === 0) {
        document.getElementById('tab_projects').style.setProperty('font-weight','800')
        document.getElementById('tab_chat').style.setProperty('font-weight','unset')
        document.getElementById('tab_links').style.setProperty('font-weight','unset')

        projectstab.style.setProperty('display','flex')
        chattab.style.setProperty('display','none')
        linkstab.style.setProperty('display','none')
    } else if(tab === 1) {
        document.getElementById('tab_projects').style.setProperty('font-weight','unset')
        document.getElementById('tab_chat').style.setProperty('font-weight','800')
        document.getElementById('tab_links').style.setProperty('font-weight','unset')

        projectstab.style.setProperty('display','none')
        chattab.style.setProperty('display','flex')
        linkstab.style.setProperty('display','none')
    } else {
        document.getElementById('tab_projects').style.setProperty('font-weight','unset')
        document.getElementById('tab_chat').style.setProperty('font-weight','unset')
        document.getElementById('tab_links').style.setProperty('font-weight','800')

        projectstab.style.setProperty('display','none')
        chattab.style.setProperty('display','none')
        linkstab.style.setProperty('display','flex')
    }
}

function projects() {
    tab = 0
    tabupdate()
}

function chat() {
    tab = 1
    tabupdate()
}

function links() {
  tab = 2
  tabupdate()
}



const query = Auto_Query.new('127.0.0.1:5500') 

const Auto_Query = {
    new(base_route) {
      return {
        get: {
          async text(route) {
            return (await fetch (`http://${base_route}/${route}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            })).text()
          },
  
          async json(route) {
            return (await fetch (`http://${base_route}/${route}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            })).json()
          }
        },
  
        post: {
          async text(route, body) {
            return (await fetch (`http://${base_route}/${route}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              },
              body: JSON.stringify(body)
            })).text()
          },
  
          async json(route, body) {
            return (await fetch (`http://${base_route}/${route}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              },
              body: JSON.stringify(body)
            })).json()
          }
        },
  
        delete: {
          async text(route) {
            return (await fetch (`http://${base_route}/${route}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            })).text()
          },
  
          async json(route) {
            return (await fetch (`http://${base_route}/${route}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
              }
            })).json()
          }
        }
      }
    }
  }
  