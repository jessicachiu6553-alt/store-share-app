import { type JSX } from 'react';
import { useAuthStore } from '../store/useAuthStore';



const NavPane = (): JSX.Element => {
    const user = useAuthStore((state) => state.user);

    return (
      <div style={styles.pane}>
        <div style={styles.title}>Navigation Left Pane</div>
        <div style={styles.paneWrap}>
            {/* TOP PART */}
          <div style={{}}> 
            {/* {user && ( */}
            <div style={styles.item}>
              Welcome, {user && user.username ? user?.username : "No login"}!
            </div>
            {/* )} */}
            <div style={styles.item}>This should be next item</div>
            <div style={styles.item}>This should be next item</div>
            <div style={styles.item}>This should be next item</div>
            <div style={styles.item}>This should be next item</div>
            <div style={styles.item}>This should be next item</div>
            <div style={styles.item}>This should be next item</div>
          </div>
            {/* TOP PART */}

          <div style={{}}>
            <div style={styles.item}>This should be the password part</div>
        </div>
        
        </div>
      </div>
    );
}




const styles: Record<string, React.CSSProperties> = {
    pane: {
        width: '250px',
        padding: '16px',
        backgroundColor: '#f5f5f5',
        borderRight: '1px solid #ddd',
        alignItems: 'stretch',
        minHeight:'80vh',
        // overflowY: 'auto',
    },
    title: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '16px',
    },
    paneWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        height:'100%'
    },

    item: {
        padding: '8px 12px',
        marginBottom: '8px',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};


export default NavPane;