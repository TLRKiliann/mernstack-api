import { BsHdd } from 'react-icons/bs';
import { BsFillCpuFill } from 'react-icons/bs';
import { MdOutlineSecurity } from 'react-icons/md';
import { FaMemory } from 'react-icons/fa';
import { GiProcessor } from 'react-icons/gi';
import { GiServerRack } from 'react-icons/gi';
import { GiPirateSkull } from 'react-icons/gi';
import { GoGitPullRequest } from 'react-icons/go';
import { MdVpnLock } from 'react-icons/md';
import { SiArkecosystem } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

export const db_computers = [
	{
		'id': 1,
		'title': "Hard Disk - SSD",
		'logo': BsHdd
	},
	{
		'id': 2,
		'title': "CPU",
		'logo': BsFillCpuFill
	},
	{
		'id': 3,
		'title': "RAM",
		'logo': FaMemory
	},
	{
		'id': 4,
		'title': "Drivers",
		'logo': GiProcessor
	},
	{
		'id': 5,
		'title': "Systemd",
		'logo': SiArkecosystem
	},
	{
		'id': 6,
		'title': "Process",
		'logo': VscServerProcess
	},
	{
		'id': 7,
		'title': "Client-Server",
		'logo': GiServerRack
	},
	{
		'id': 8,
		'title': "Protocols",
		'logo': BsHdd
	},
	{
		'id': 9,
		'title': "Request - Response",
		'logo': GoGitPullRequest
	},
	{
		'id': 10,
		'title': "Firewall",
		'logo': MdOutlineSecurity
	},
	{
		'id': 11,
		'title': "Proxy - VPN",
		'logo': MdVpnLock
	},
	{
		'id': 12,
		'title': "Cybersecurity",
		'logo': GiPirateSkull
	},
]